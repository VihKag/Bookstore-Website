using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Services.CategoryService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using X.PagedList;

namespace bookStore.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        public static PagedResult<PagedList<CategoryDTO>> CreatePagedResult(PagedList<CategoryDTO> content, int pageNumber, int pageSize, int totalPages)
        {
            return new PagedResult<PagedList<CategoryDTO>>
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = totalPages,
                Content = content
            };
        }

        [HttpGet("admin")]
        public ActionResult<PagedResult<PagedList<CategoryDTO>>> PaginationCategory(int pageNumber, int pageSize)
        {
            PagedList<CategoryDTO> pagedCategories = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedCategories = _categoryService.PaginationCategory(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    pagedCategories = _categoryService.PaginationCategory(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    pagedCategories = _categoryService.PaginationCategory(pageNumber, pageSize = 10);
                    break;
                default:
                    pagedCategories = _categoryService.PaginationCategory(pageNumber, pageSize);
                    break;
            }
            if (pagedCategories == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<CategoryDTO>> pagedResult = CreatePagedResult(pagedCategories, pageNumber, pageSize, pagedCategories.PageCount);
           
            return Ok(pagedResult);
        }

        [HttpGet("client")]
        public ActionResult<PagedResult<PagedList<CategoryDTO>>> PaginationNotDeleted(int pageNumber, int pageSize)
        {
            PagedList<CategoryDTO> pagedCategories = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedCategories = _categoryService.PaginationNotDeleted(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    pagedCategories = _categoryService.PaginationNotDeleted(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    pagedCategories = _categoryService.PaginationNotDeleted(pageNumber, pageSize = 10);
                    break;
                default:
                    pagedCategories = _categoryService.PaginationNotDeleted(pageNumber, pageSize);
                    break;
            }

            if (pagedCategories == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<CategoryDTO>> pagedResult = CreatePagedResult(pagedCategories, pageNumber, pageSize, pagedCategories.PageCount);

            return Ok(pagedResult);
        }
        [HttpGet("list")]
        public ActionResult<List<CategoryDTO>> GetAllNotDeleted()
        {
            var categories = _categoryService.GetAllNotDeleted();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public ActionResult<CategoryDTO> GetById(string id)
        {
            var category = _categoryService.GetById(id);
            if(category == null)
            {
                return NotFound("Không tìm thấy Category!");
            }
            return Ok(category);
        }

        [HttpGet("name/{name}")]
        public ActionResult<List<CategoryDTO>> GetByName(string name)
        {
            var category = _categoryService.GetByName(name);
            if (category == null)
            {
                return NotFound("Không tìm thấy Category!");
            }
            return Ok(category);
        }


        [HttpPut("{id}/restore")]
        public ActionResult<CategoryDTO> Restore(string id)
        {
            var category = _categoryService.Restore(id);
            if (category == null)
            {
                return BadRequest("Vui lòng kiểm tra lại ID!");
            }
            return Ok(category);
        }

        [HttpPost]
        public ActionResult<CategoryDTO> Create(CategoryDTO categoryDTO)
        {
            var category = _categoryService.Create(categoryDTO);
            if(category == null)
            {
                return BadRequest("Đã tồn tại tên danh mục!");
            }
            return Ok(category);
        }

        [HttpPut("{cateID}")]
        public ActionResult<CategoryDTO> Update(CategoryDTO categoryDTO, string cateID)
        {
            var category = _categoryService.Update(categoryDTO,cateID);
            if(category == null) 
            {
                return BadRequest("Tên danh mục đã tồn tại hoặc ID không đúng!");
            }
            return Ok(category);
        }

        [HttpPut("{id}/isDelete")]
        public ActionResult Delete(string id)
        {
            var result = _categoryService.Delete(id);
            if (result==false)
            {
                return NotFound("Không tìm thấy Category!");
            }
            return Ok("Thành công!!!");
        }

        [HttpDelete("{id}")]
        public ActionResult PermanentlyDelete(string id)
        {
            var result = _categoryService.PermanentlyDelete(id);
            if (result == false)
            {
                return NotFound("Không tìm thấy Category!");
            }
            return Ok("Thành công!!!");
        }
        
    }
}
