using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Services.AuthorService;
using Microsoft.AspNetCore.Mvc;
using X.PagedList;

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

        public static PagedResult<PagedList<AuthorDTO>> CreatePagedResult(PagedList<AuthorDTO> content, int pageNumber, int pageSize, int totalPages)
        {
            return new PagedResult<PagedList<AuthorDTO>>
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = totalPages,
                Content = content
            };
        }

        [HttpGet("admin")]
        public ActionResult<PagedResult<PagedList<AuthorDTO>>> PaginationAuthor(int pageNumber, int pageSize)
        {
            PagedList<AuthorDTO> pagedAuthors = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedAuthors = _authorSevice.PaginationAuthor(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    pagedAuthors = _authorSevice.PaginationAuthor(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    pagedAuthors = _authorSevice.PaginationAuthor(pageNumber, pageSize = 10);
                    break;
                default:
                    pagedAuthors = _authorSevice.PaginationAuthor(pageNumber, pageSize);
                    break;
            }
            if (pagedAuthors == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<AuthorDTO>> pagedResult = CreatePagedResult(pagedAuthors, pageNumber, pageSize, pagedAuthors.PageCount);

            return Ok(pagedResult);
        }
        [HttpGet("client")]
        public ActionResult<PagedResult<PagedList<AuthorDTO>>> PaginationNotDeleted(int pageNumber, int pageSize)
        {
            PagedList<AuthorDTO> pagedAuthors = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedAuthors = _authorSevice.PaginationNotDeleted(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    pagedAuthors = _authorSevice.PaginationNotDeleted(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    pagedAuthors = _authorSevice.PaginationNotDeleted(pageNumber, pageSize = 10);
                    break;
                default:
                    pagedAuthors = _authorSevice.PaginationNotDeleted(pageNumber, pageSize);
                    break;
            }
            if (pagedAuthors == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<AuthorDTO>> pagedResult = CreatePagedResult(pagedAuthors, pageNumber, pageSize, pagedAuthors.PageCount);

            return Ok(pagedResult);
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


        [HttpPut("{id}/restore")]
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
