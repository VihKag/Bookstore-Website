using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Reponsitory;
using bookStore.Repository;
using bookStore.Services.ObjectMapping;
using NanoidDotNet;

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

        private readonly MappingService _mappingService;

        public BookService(MappingService mappingService, IBookRepository bookRepository, ICategoryRepository categoryRepository, IBookCategoryRepository bookCategoryRepository, IAuthorRepository authorRepository, IBookAuthorRepository bookAuthorRepository, IPublisherRepository publisherRepository, IBookPublisherRepository bookPublisherRepository )
        {
            _bookRepository = bookRepository;
            _mappingService = mappingService;
            _categoryRepository = categoryRepository;
            _authorRepository = authorRepository;
            _publisherRepository = publisherRepository;
            _bookAuthorRepository= bookAuthorRepository;
            _bookCategoryRepository = bookCategoryRepository;
            _bookPublisherRepository= bookPublisherRepository;
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

            dto.CategoryList.ForEach(cate =>
            {
                Category category = _categoryRepository.FindByName(cate);
                string IdcateB = Nanoid.Generate(size: 10);
                var new_BookCategory = new BookCategory(IdcateB,dto.Isbn,category.Id);
                new_BookCategory.IsDelete= false;
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
                _bookPublisherRepository.Create(new_BookPublisher);
                _bookPublisherRepository.Save();
            });


            

            return dto;
        }

        public bool Delete(string isbn)
        {
            throw new NotImplementedException();
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
            if (entity == null)
            {
                return null;
            }
            
            BookDTO dto = _mappingService.GetMapper().Map<BookDTO>(entity);

            dto.Date = entity.Date.Date;


            List<BookAuthor> authorList = _bookAuthorRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in authorList)
            {
                var author = _authorRepository.FindById(item.AuthorId);
                var au = author.Name;
                dto.AuthorList.Add(au);
            }

            List<BookCategory> categoryList = _bookCategoryRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in categoryList)
            {
                var category = _categoryRepository.FindByID(item.CateId);
                var cate = category.Name;
                dto.CategoryList.Add(cate);
            }

            List<BookPublisher> publisherList = _bookPublisherRepository.FindByCondition(x => x.Isbn == isbn);

            foreach (var item in publisherList)
            {
                var publisher = _publisherRepository.FindByID(item.PubId);
                var pub = publisher.Name;
                dto.PublisherList.Add(pub);
            }

            return dto;
        }

        public List<BookDTO> GetByCate(string cateName)
        {
            Category cate = _categoryRepository.FindByName(cateName);
            var cateId = cate.Id;
            List<BookDTO> listBook = new List<BookDTO>();
            List<BookCategory> bookCategory = _bookCategoryRepository.FindByCondition(x => cateId == x.CateId);
            foreach (var item in bookCategory)
            {
                BookDTO dto = GetById(item.Isbn);
                listBook.Add(dto);
            }

            return listBook;
        }

        public List<BookDTO> PaginationBook(int pageNumber, int pageSize)
        {
            throw new NotImplementedException();
        }

        public bool PermanentlyDelete(string isbn)
        {
            throw new NotImplementedException();
        }

        public BookDTO? Restore(string isbn)
        {
            throw new NotImplementedException();
        }

        public BookDTO? Update(BookDTO book)
        {
            

            throw new NotImplementedException();
        }

        public List<BookDTO> GetByAuthor(string authorName)
        {
            Author author = _authorRepository.FindByName(authorName);
            var authorID = author.AuthorId;
            List<BookDTO> listBook = new List<BookDTO>();
            List<BookAuthor> bookAuthors = _bookAuthorRepository.FindByCondition(x => authorID == x.AuthorId);
            foreach (var item in bookAuthors)
            {
                BookDTO dto = GetById(item.Isbn);
                listBook.Add(dto);
            }

            return listBook;
        }

        public List<BookDTO> GetByPublisher(string pubName)
        {
            Publisher publisher = _publisherRepository.FindByName(pubName);
            var pubId = publisher.Id;
            List<BookDTO> listBook = new List<BookDTO>();
            List<BookPublisher> bookPublishers = _bookPublisherRepository.FindByCondition(x => pubId == x.PubId);
            foreach (var item in bookPublishers)
            {
                BookDTO dto = GetById(item.Isbn);
                listBook.Add(dto);
            }

            return listBook;
        }

        public List<BookDTO> SearchByTitle(string title)
        {
            List<BookDTO> listBook = new List<BookDTO>();
            List<Book> books = _bookRepository.FindByCondition(b => b.Name.Contains(title)).ToList();
            foreach (var item in books)
            {
                BookDTO dto = GetById(item.Isbn);
                listBook.Add(dto);
            }
            return listBook;
        }
    }
}
