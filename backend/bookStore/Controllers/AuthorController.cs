﻿using bookStore.Models.DTOs;
using bookStore.Services.AuthorService;
using Microsoft.AspNetCore.Mvc;

namespace bookStore.Controllers
{
    [Route("api/author")]
    [ApiController]
    public class AuthorController: ControllerBase
    {
        private readonly IAuthorSevice _authorSevice;

        public AuthorController(IAuthorSevice authorSevice)
        {
            _authorSevice = authorSevice;
        }

        [HttpGet]
        public ActionResult<List<AuthorDTO>> PaginationAuthor(int pageNumber, int pageSize)
        {
            var pagedAuthors = _authorSevice.PaginationAuthor(pageNumber, pageSize);
            return Ok(pagedAuthors);
        }


        [HttpGet("deleted")]
        public ActionResult<List<AuthorDTO>> GetAllDeleted()
        {
            var authors = _authorSevice.GetAllDeleted();
            return Ok(authors);
        }

        [HttpGet("id/{id}")]
        public ActionResult<List<AuthorDTO>> GetById(string id)
        {
            var author = _authorSevice.GetById(id);
            if (author == null)
            {
                return NotFound("Không tìm thấy Author!");
            }
            return Ok(author);
        }

        [HttpGet("name/{name}")]
        public ActionResult<List<AuthorDTO>> GetByName(string name)
        {
            var author = _authorSevice.GetByName(name);
            if (author == null)
            {
                return NotFound("Không tìm thấy Author!");
            }
            return Ok(author);
        }


        [HttpPost("restore")]
        public ActionResult<AuthorDTO> Restore(string id)
        {
            var author = _authorSevice.Restore(id);
            if (author == null)
            {
                return BadRequest("Vui lòng kiểm tra lại ID!");
            }
            return Ok(author);
        }

        [HttpPost]
        public ActionResult<AuthorDTO> Create(AuthorDTO authorDTO)
        {
            var author = _authorSevice.Create(authorDTO);
            if (author == null)
            {
                return BadRequest("Đã tồn tại tác giả!");
            }
            return Ok(author);
        }

        [HttpPut]
        public ActionResult<AuthorDTO> Update(AuthorDTO authorDTO)
        {
            var author = _authorSevice.Update(authorDTO);
            if (author == null)
            {
                return BadRequest("Tên tác giả đã tồn tại hoặc ID không đúng!");
            }
            return Ok(author);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var result = _authorSevice.Delete(id);
            if (result == false)
            {
                return NotFound("Không tìm thấy Author!");
            }
            return Ok("Thành công!!!");
        }

        [HttpDelete("{id}/permanently-delete")]
        public ActionResult PermanentlyDelete(string id)
        {
            var result = _authorSevice.PermanentlyDelete(id);
            if (result == false)
            {
                return NotFound("Không tìm thấy Author!");
            }
            return Ok("Thành công!!!");
        }

    }
}