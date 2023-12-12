using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Services.BookService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using X.PagedList;

namespace bookStore.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        public static PagedResult<PagedList<BookDTO>> CreatePagedResult(PagedList<BookDTO> content, int pageNumber, int pageSize, int totalPages)
        {
            return new PagedResult<PagedList<BookDTO>>
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = totalPages,
                Content = content
            };
        }


        [HttpPost]
        public ActionResult<BookDTO> Create([FromForm] BookDTO bookDTO)
        {
            var book = _bookService.Create(bookDTO);
            if (book == null)
            {
                return BadRequest("Lỗi khi thêm sách!");
            }
            return Ok(book);
        }

        [HttpGet("admin")]
        public ActionResult<PagedResult<PagedList<BookDTO>>> GetAll(int pageNumber, int pageSize)
        {
            PagedList<BookDTO> book = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetAll(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    book = _bookService.GetAll(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetAll(pageNumber, pageSize = 10);
                    break;
                default:
                    book = _bookService.GetAll(pageNumber, pageSize);
                    break;
            }
            if (book == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<BookDTO>> pagedResult = CreatePagedResult(book, pageNumber, pageSize, book.PageCount);

            return Ok(pagedResult);

        }
        [HttpGet("client")]
        public ActionResult<PagedResult<PagedList<BookDTO>>> GetAllNotDelete(int pageNumber, int pageSize)
        {
            PagedList<BookDTO> book = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetAllNotDelete(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    book = _bookService.GetAllNotDelete(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetAllNotDelete(pageNumber, pageSize = 10);
                    break;
                default:
                    book = _bookService.GetAllNotDelete(pageNumber, pageSize);
                    break;
            }
            if (book == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<BookDTO>> pagedResult = CreatePagedResult(book, pageNumber, pageSize, book.PageCount);


            return Ok(pagedResult);
        }

        [HttpPut("{isbn}/isDelete")]
        public ActionResult<bool> Delete(string isbn)
        {
            var book = _bookService.Delete(isbn);
            if (book != true)
            {
                return BadRequest("Xóa thất bại do không tồn tại sách hoặc sách đã được ẩn!");
            }
            return Ok(book);
        }
        [HttpPut("{isbn}/restore")]
        public ActionResult<bool> Restore(string isbn)
        {
            var book = _bookService.Restore(isbn);
            if (book != true)
            {
                return BadRequest("Khôi phục thất bại do không tồn tại sách hoặc sách không bị ẩn!");
            }
            return Ok(book);
        }

        [HttpGet("{isbn}")]
        public ActionResult<Book> GetById(string isbn)
        {
            var book = _bookService.GetById(isbn);
            if (book == null)
            {
                return BadRequest("Không tồn tại sách!");
            }
            return Ok(book);
        }
        [HttpGet("cate/{cateName}")]
        public ActionResult<PagedResult<PagedList<BookDTO>>> GetByCate(string cateName, int pageNumber, int pageSize)
        {
            PagedList<BookDTO> book = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetByCate(cateName, pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    book = _bookService.GetByCate(cateName, pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetByCate(cateName, pageNumber, pageSize = 10);
                    break;
                default:
                    book = _bookService.GetByCate(cateName, pageNumber, pageSize);
                    break;
            }
            if (book == null)
            {
                return BadRequest("Không có sách thuộc thể loại này!");
            }

            PagedResult<PagedList<BookDTO>> pagedResult = CreatePagedResult(book, pageNumber, pageSize, book.PageCount);

            return Ok(pagedResult);
        }
        [HttpGet("author/{authorName}")]
        public ActionResult<PagedResult<PagedList<BookDTO>>> GetByAuthor(string authorName, int pageNumber, int pageSize)
        {
            PagedList<BookDTO> book = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetByAuthor(authorName, pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    book = _bookService.GetByAuthor(authorName, pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetByAuthor(authorName, pageNumber, pageSize = 10);
                    break;
                default:
                    book = _bookService.GetByAuthor(authorName, pageNumber, pageSize);
                    break;
            }

            if (book == null)
            {
                return BadRequest("Không có sách thuộc tác giả này!");
            }

            PagedResult<PagedList<BookDTO>> pagedResult = CreatePagedResult(book, pageNumber, pageSize, book.PageCount);

            return Ok(pagedResult);
        }

        [HttpGet("publisher/{pubName}")]
        public ActionResult<PagedResult<PagedList<BookDTO>>> GetByPublisher(string pubName, int pageNumber, int pageSize)
        {
            PagedList<BookDTO> book = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetByPublisher(pubName, pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    book = _bookService.GetByPublisher(pubName, pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetByPublisher(pubName, pageNumber, pageSize = 10);
                    break;
                default:
                    book = _bookService.GetByPublisher(pubName, pageNumber, pageSize);
                    break;
            }
            if (book == null)
            {
                return BadRequest("Không có sách thuộc nhà xuất bản này!");
            }
            PagedResult<PagedList<BookDTO>> pagedResult = CreatePagedResult(book, pageNumber, pageSize, book.PageCount);

            return Ok(pagedResult);
        }

        [HttpPut("{isbn}")]
        public ActionResult<BookDTO> Update(BookDTO dto, string isbn)
        {
            var book = _bookService.Update(dto, isbn);
            if (book == null)
            {
                return BadRequest("Cập nhật thông tin thất bại!");
            }
            return Ok(book);
        }

        [HttpGet("search")]
        public ActionResult<List<BookDTO>> SearchByTitle(string title)
        {
            var book = _bookService.SearchByTitle(title);
            if (book == null)
            {
                return BadRequest("Không có sách này!");
            }

            return Ok(book);
        }

    }
}
