using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Services.BookService;
using Microsoft.AspNetCore.Mvc;

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

        [HttpPost]
        public ActionResult<BookDTO> Create([FromForm] BookDTO bookDTO)
        {
            var book = _bookService.Create(bookDTO);
            if (book == null)
            {
                return BadRequest("Đã tồn tại sách!");
            }
            return Ok(book);
        }

        [HttpGet("admin")]
        public ActionResult <List<BookDTO>> GetAll(int pageNumber, int pageSize)
        {
            var book = new List<BookDTO>();
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetAll(1, 10);
                    break;
                case (0, _):
                    book = _bookService.GetAll(1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetAll(pageNumber, 10);
                    break;
                default:
                    book = _bookService.GetAll(pageNumber, pageSize);
                    break;
            }
            if (book == null)
            {
                return BadRequest("Không lấy được danh sách");
            }
            return Ok(book);

        }
        [HttpGet("client")]
        public ActionResult<List<BookDTO>> GetAllNotDelete(int pageNumber, int pageSize)
        {
            var book = new List<BookDTO>();
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetAllNotDelete(1, 10);
                    break;
                case (0, _):
                    book = _bookService.GetAllNotDelete(1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetAllNotDelete(pageNumber, 10);
                    break;
                default:
                    book = _bookService.GetAllNotDelete(pageNumber, pageSize);
                    break;
            }
            if (book == null)
            {
                return BadRequest("Không lấy được danh sách");
            }
            return Ok(book);
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
        public ActionResult<List<Book>> GetByCate(string cateName, int pageNumber, int pageSize)
        {
            var book = new List<BookDTO>();
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetByCate(cateName, 1, 10);
                    break;
                case (0, _):
                    book = _bookService.GetByCate(cateName, 1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetByCate(cateName, pageNumber, 1);
                    break;
                default:
                    book = _bookService.GetByCate(cateName, pageNumber, pageSize);
                    break;
            }
            if (book == null)
            {
                return BadRequest("Không có sách thuộc thể loại này!");
            }

            return Ok(book);
        }
        [HttpGet("author/{authorName}")]
        public ActionResult<List<Book>> GetByAuthor(string authorName, int pageNumber, int pageSize)
        {
            var book = new List<BookDTO>();
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetByAuthor(authorName, 1, 10);
                    break;
                case (0, _):
                    book = _bookService.GetByAuthor(authorName, 1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetByAuthor(authorName, pageNumber, 10);
                    break;
                default:
                    book = _bookService.GetByAuthor(authorName, pageNumber, pageSize);
                    break;
            }
            book = _bookService.GetByAuthor(authorName, pageNumber, pageSize);
            if (book == null)
            {
                return BadRequest("Không có sách thuộc tác giả này!");
            }
            return Ok(book);
        }

        [HttpGet("publisher/{pubName}")]
        public ActionResult<List<Book>> GetByPublisher(string pubName, int pageNumber, int pageSize)
        {
            var book = new List<BookDTO>();
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    book = _bookService.GetByPublisher(pubName, 1, 10);
                    break;
                case (0, _):
                    book = _bookService.GetByPublisher(pubName, 1, pageSize);
                    break;
                case (_, 0):
                    book = _bookService.GetByPublisher(pubName, pageNumber, 10);
                    break;
                default:
                    book = _bookService.GetByPublisher(pubName, pageNumber, pageSize);
                    break;
            }

            book = _bookService.GetByPublisher(pubName, pageNumber, pageSize);
            if (book == null)
            {
                return BadRequest("Không có sách thuộc nhà xuất bản này!");
            }

            return Ok(book);
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
