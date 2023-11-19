﻿using bookStore.Models.DTOs;
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
    }
}
