using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Services.BookService;
using Microsoft.AspNetCore.Mvc;

namespace bookStore.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController: ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpPost]
        public ActionResult<BookDTO> Create(BookDTO bookDTO)
        {
            var book = _bookService.Create(bookDTO);
            if (book == null)
            {
                return BadRequest("Đã tồn tại sách!");
            }
            return Ok(book);
        }

        [HttpGet("isbn")]
        public ActionResult<Book> GetById(string isbn)
        {
            var book = _bookService.GetById(isbn);
            if (book == null)
            {
                return BadRequest("Không tồn tại sách!");
            }
            return Ok(book);
        }
        [HttpGet("category")]
        public ActionResult<List<Book>> GetByCate(string cateName)
        {
            var book = _bookService.GetByCate(cateName);
            if (book == null)
            {
                return BadRequest("Không có sách thuộc thể loại này!");
            }
            
            return Ok(book);
        }

        [HttpGet("author")]
        public ActionResult<List<Book>> GetByAuthor(string authorName)
        {
            var book = _bookService.GetByAuthor(authorName);
            if (book == null)
            {
                return BadRequest("Không có sách thuộc thể loại này!");
            }

            return Ok(book);
        }

        [HttpGet("publisher")]
        public ActionResult<List<Book>> GetByPublisher(string pubName)
        {
            var book = _bookService.GetByPublisher(pubName);
            if (book == null)
            {
                return BadRequest("Không có sách thuộc thể loại này!");
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
