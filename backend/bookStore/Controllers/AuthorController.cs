using bookStore.Models.DTOs;
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

        [HttpGet("admin")]
        public ActionResult<List<AuthorDTO>> PaginationAuthor(int pageNumber, int pageSize)
        {
            var pagedAuthors = new List<AuthorDTO>();
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedAuthors = _authorSevice.PaginationAuthor(1, 10);
                    break;
                case (0, _):
                    pagedAuthors = _authorSevice.PaginationAuthor(1, pageSize);
                    break;
                case (_, 0):
                    pagedAuthors = _authorSevice.PaginationAuthor(pageNumber, 10);
                    break;
                default:
                    pagedAuthors = _authorSevice.PaginationAuthor(pageNumber, pageSize);
                    break;
            }
             
            return Ok(pagedAuthors);
        }
        [HttpGet("client")]
        public ActionResult<List<AuthorDTO>> PaginationNotDeleted(int pageNumber, int pageSize)
        {
            var pagedAuthors = new List<AuthorDTO>();
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedAuthors = _authorSevice.PaginationNotDeleted(1, 10);
                    break;
                case (0, _):
                    pagedAuthors = _authorSevice.PaginationNotDeleted(1, pageSize);
                    break;
                case (_, 0):
                    pagedAuthors = _authorSevice.PaginationNotDeleted(pageNumber, 10);
                    break;
                default:
                    pagedAuthors = _authorSevice.PaginationNotDeleted(pageNumber, pageSize);
                    break;
            }
             
            return Ok(pagedAuthors);
        }

        [HttpGet("list")]
        public ActionResult<List<AuthorDTO>> GetAllNotDeleted()
        {
            var authors = _authorSevice.GetAllNotDeleted();
            return Ok(authors);
        }

        [HttpGet("{id}")]
        public ActionResult<AuthorDTO> GetById(string id)
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


        [HttpPost("{id}/restore")]
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

        [HttpPut("{authID}")]
        public ActionResult<AuthorDTO> Update(AuthorDTO authorDTO, string authID)
        {
            var author = _authorSevice.Update(authorDTO, authID);
            if (author == null)
            {
                return BadRequest("Tên tác giả đã tồn tại hoặc ID không đúng!");
            }
            return Ok(author);
        }

        [HttpPut("{id}/isDelete")]
        public ActionResult Delete(string id)
        {
            var result = _authorSevice.Delete(id);
            if (result == false)
            {
                return NotFound("Không tìm thấy Author!");
            }
            return Ok("Thành công!!!");
        }

        [HttpDelete("{id}")]
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
