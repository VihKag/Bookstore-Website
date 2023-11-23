using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Reponsitory;
using bookStore.Repository;
using bookStore.Services.ObjectMapping;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using NanoidDotNet;
using System.Drawing.Printing;
using X.PagedList;

namespace bookStore.Services.BookService
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;

        private readonly ICategoryRepository _categoryRepository;
        private readonly IBookCategoryRepository _bookCategoryRepository;

        private readonly IAuthorRepository _authorRepository;
        private readonly IBookAuthorRepository _bookAuthorRepository;

        private readonly IPublisherRepository _publisherRepository;
        private readonly IBookPublisherRepository _bookPublisherRepository;

        private readonly IImageRepository _imageRepository;

        private readonly MappingService _mappingService;

        private Account account;
        private Cloudinary cloudinary;


        public BookService(MappingService mappingService, 
                            IBookRepository bookRepository, ICategoryRepository categoryRepository, 
                            IBookCategoryRepository bookCategoryRepository, IAuthorRepository authorRepository, 
                            IBookAuthorRepository bookAuthorRepository, IPublisherRepository publisherRepository, 
                            IBookPublisherRepository bookPublisherRepository, IImageRepository imageRepository)
        {
            _bookRepository = bookRepository;
            _mappingService = mappingService;
            _categoryRepository = categoryRepository;
            _authorRepository = authorRepository;
            _publisherRepository = publisherRepository;
            _bookAuthorRepository= bookAuthorRepository;
            _bookCategoryRepository = bookCategoryRepository;
            _bookPublisherRepository= bookPublisherRepository;
            _imageRepository= imageRepository;
            account = new Account("dggnygweb", "337595188235586", "u9JNvp9j9YlTwHcuX9MpXw73uME");
            cloudinary = new Cloudinary(account);
        }

        public BookDTO? Create(BookDTO dto)
        {
            //dto.Id = Nanoid.Generate(size: 10);
            Book book = _mappingService.GetMapper().Map<Book>(dto);
            book.Date = dto.Date.Date;
            book.IsDelete = false;
            book.State = true;
            _bookRepository.Create(book);
            _bookRepository.Save();
            CreateRelationship(dto);

            var uploadParams = new ImageUploadParams
            {
                File = new FileDescription(dto.ImagePath),
                PublicId = Nanoid.Generate(size: 10)
        };

            var uploadResult = cloudinary.Upload(uploadParams);

            // Lấy URL công khai của hình ảnh đã tải lên
            var imageUrl = uploadResult.SecureUrl;

            Image image = new Image();
            image.Isbn = dto.Isbn;
            image.Name = imageUrl.ToString();
            _imageRepository.Create(image);
            _imageRepository.Save();

            return dto;
        }

        private void CreateRelationship(BookDTO dto)
        {
            dto.CategoryList.ForEach(cate =>
            {
                Category category = _categoryRepository.FindByName(cate);
                string IdcateB = Nanoid.Generate(size: 10);
                var new_BookCategory = new BookCategory(IdcateB, dto.Isbn, category.Id);
                new_BookCategory.IsDelete = false;
                _bookCategoryRepository.Create(new_BookCategory);
                _bookCategoryRepository.Save();
            });

            dto.AuthorList.ForEach(au =>
            {
                Author author = _authorRepository.FindByName(au);
                string IdAuB = Nanoid.Generate(size: 10);
                var new_BookAuthor = new BookAuthor(IdAuB, author.AuthorId, dto.Isbn);
                new_BookAuthor.IsDelete = false;
                _bookAuthorRepository.Create(new_BookAuthor);
                _bookAuthorRepository.Save();
            });

            dto.PublisherList.ForEach(pub =>
            {
                Publisher publisher = _publisherRepository.FindByName(pub);
                string IdPubB = Nanoid.Generate(size: 10);
                var new_BookPublisher = new BookPublisher(IdPubB, dto.Isbn, publisher.Id);
                new_BookPublisher.IsDelete = false;
                _bookPublisherRepository.Create(new_BookPublisher);
                _bookPublisherRepository.Save();
            });
        }

        public bool Delete(string isbn)
        {
            if (isbn == null)
                return false;

            Book book = _bookRepository.FindById(isbn);

            if (book.IsDelete == true) 
                return false;

            book.IsDelete = true;
            _bookRepository.Update(book);
            _bookRepository.Save();

            List<BookAuthor> authorList = _bookAuthorRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in authorList)
            {
               item.IsDelete = true;
                _bookAuthorRepository.Update(item);
                _bookAuthorRepository.Save();
            }

            List<BookCategory> categoryList = _bookCategoryRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in categoryList)
            {
                item.IsDelete = true;
                _bookCategoryRepository.Update(item);
                _bookCategoryRepository.Save();
            }

            List<BookPublisher> publisherList = _bookPublisherRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in publisherList)
            {
                item.IsDelete = true;
                _bookPublisherRepository.Update(item);
                _bookPublisherRepository.Save();
            }

            return true;
        }

        public List<BookDTO> GetAll()
        {
            throw new NotImplementedException();
        }

        public List<BookDTO> GetAllDeleted()
        {
            throw new NotImplementedException();
        }

        public BookDTO GetById(string isbn)
        {
            Book entity = _bookRepository.FindById(isbn);
            if (entity.IsDelete != false)
            {
                return null;
            }
            
            BookDTO dto = _mappingService.GetMapper().Map<BookDTO>(entity);

            dto.Date = entity.Date.Date;

            dto.AuthorList = GetAuthorsByISBN(isbn);
            dto.CategoryList = GetCategoriesByISBN(isbn);
            dto.PublisherList = GetPublishersByISBN(isbn);

            return dto;
        }

        private List<string> GetAuthorsByISBN(string isbn)
        {
            List<BookAuthor> authorList = _bookAuthorRepository.FindByCondition(x => x.Isbn == isbn);
            List<string> authors = new List<string>();

            foreach (var item in authorList)
            {
                var author = _authorRepository.FindById(item.AuthorId);
                var au = author.Name;
                authors.Add(au);
            }

            return authors;
        }

        private List<string> GetCategoriesByISBN(string isbn)
        {
            List<BookCategory> categoryList = _bookCategoryRepository.FindByCondition(x => x.Isbn == isbn);
            List<string> categories = new List<string>();

            foreach (var item in categoryList)
            {
                var category = _categoryRepository.FindByID(item.CateId);
                var cate = category.Name;
                categories.Add(cate);
            }

            return categories;
        }

        private List<string> GetPublishersByISBN(string isbn)
        {
            List<BookPublisher> publisherList = _bookPublisherRepository.FindByCondition(x => x.Isbn == isbn);
            List<string> publishers = new List<string>();

            foreach (var item in publisherList)
            {
                var publisher = _publisherRepository.FindByID(item.PubId);
                var pub = publisher.Name;
                publishers.Add(pub);
            }

            return publishers;
        }

        public List<BookDTO> GetByCate(string cateName, int pageNumber, int pageSize)
        {
            Category cate = _categoryRepository.FindByName(cateName);
            var cateId = cate.Id;
            List<BookDTO> listBook = new List<BookDTO>();

            List<BookCategory> bookCategory = _bookCategoryRepository.FindByCondition(x => cateId == x.CateId).ToList();

            foreach (var item in bookCategory)
            {
                if (item.IsDelete != true)
                {
                    BookDTO dto = GetById(item.Isbn);
                    listBook.Add(dto);
                }
            }

            var pagedBookCategory = listBook.ToPagedList(pageNumber, pageSize);
            var pagedBookCategoryList = pagedBookCategory.ToList();
            return pagedBookCategoryList;
        }


        public bool PermanentlyDelete(string isbn)
        {
            throw new NotImplementedException();
        }

        public bool Restore(string isbn)
        {
            if (isbn == null)
                return false;

            Book book = _bookRepository.FindById(isbn);

            if (book.IsDelete == false)
                return false;

            book.IsDelete = false;
            _bookRepository.Update(book);
            _bookRepository.Save();

            List<BookAuthor> authorList = _bookAuthorRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in authorList)
            {
                item.IsDelete = false;
                _bookAuthorRepository.Update(item);
                _bookAuthorRepository.Save();
            }

            List<BookCategory> categoryList = _bookCategoryRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in categoryList)
            {
                item.IsDelete = false;
                _bookCategoryRepository.Update(item);
                _bookCategoryRepository.Save();
            }

            List<BookPublisher> publisherList = _bookPublisherRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in publisherList)
            {
                item.IsDelete = false;
                _bookPublisherRepository.Update(item);
                _bookPublisherRepository.Save();
            }

            return true;
        }

        public BookDTO? Update(BookDTO dto)
        {
            if (dto.Isbn == null)
            {
                return null;
            }

            Book entity = _bookRepository.FindById(dto.Isbn);
            if (entity == null)
            {
                return null;
            }
            DeleteBookByISBN(dto.Isbn);

            CreateRelationship(dto);

            entity = _mappingService.GetMapper().Map<Book>(dto);
            entity.IsDelete = false;
            _bookRepository.Update(entity);
            _bookRepository.Save();

            return dto;
        }
        public void DeleteBookByISBN(string isbn)
        {
            DeletePublishersByISBN(isbn);
            DeleteCategoriesByISBN(isbn);
            DeleteAuthorsByISBN(isbn);
        }

        private void DeletePublishersByISBN(string isbn)
        {
            List<BookPublisher> publisherList = _bookPublisherRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in publisherList)
            {
                _bookPublisherRepository.Delete(item);
            }
        }

        private void DeleteCategoriesByISBN(string isbn)
        {
            List<BookCategory> categoryList = _bookCategoryRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in categoryList)
            {
                _bookCategoryRepository.Delete(item);
            }
        }

        private void DeleteAuthorsByISBN(string isbn)
        {
            List<BookAuthor> authorList = _bookAuthorRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in authorList)
            {
                _bookAuthorRepository.Delete(item);
            }
        }
        public List<BookDTO> GetByAuthor(string authorName, int pageNumber, int pageSize)
        {
            Author author = _authorRepository.FindByName(authorName);
            var authorID = author.AuthorId;
            List<BookDTO> listBook = new List<BookDTO>();
            List<BookAuthor> bookAuthors = _bookAuthorRepository.FindByCondition(x => authorID == x.AuthorId).ToList(); ;
            foreach (var item in bookAuthors)
            {
                if (item.IsDelete != true)
                {
                    BookDTO dto = GetById(item.Isbn);
                    listBook.Add(dto);
                }
            }

            var pagedBookAuthor = listBook.ToPagedList(pageNumber, pageSize);
            var pagedBookAuthorList = pagedBookAuthor.ToList();
            return pagedBookAuthorList;
        }

        public List<BookDTO> GetByPublisher(string pubName, int pageNumber, int pageSize)
        {
            Publisher publisher = _publisherRepository.FindByName(pubName);
            var pubId = publisher.Id;
            List<BookDTO> listBook = new List<BookDTO>();
            List<BookPublisher> bookPublishers = _bookPublisherRepository.FindByCondition(x => pubId == x.PubId);
            foreach (var item in bookPublishers)
            {
                if (item.IsDelete != true)
                {
                    BookDTO dto = GetById(item.Isbn);
                    listBook.Add(dto);
                }
            }

            var pagedBookPublisher = listBook.ToPagedList(pageNumber, pageSize);
            var pagedBookPublisherList = pagedBookPublisher.ToList();
            return pagedBookPublisherList;
        }

        public List<BookDTO> SearchByTitle(string title)
        {
            List<BookDTO> listBook = new List<BookDTO>();
            List<Book> books = _bookRepository.FindByCondition(b => b.Name.Contains(title)).ToList();
            foreach (var item in books)
            {
                if (item.IsDelete != true)
                {
                    BookDTO dto = GetById(item.Isbn);
                    listBook.Add(dto);
                }
            }
            return listBook;
        }
    }
}
