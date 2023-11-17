using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Services.CategoryService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        [HttpGet]
        public ActionResult<List<CategoryDTO>> PaginationCategory(int pageNumber, int pageSize)
        {
            var pagedCategories = _categoryService.PaginationCategory(pageNumber,pageSize);
            return Ok(pagedCategories);
        }
    

        [HttpGet("deleted")]
        public ActionResult<List<CategoryDTO>> GetAllDeleted()
        {
            var categories = _categoryService.GetAllDeleted();
            return Ok(categories);
        }

        [HttpGet("id/{id}")]
        public ActionResult<List<CategoryDTO>> GetById(string id)
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


        [HttpPost("restore")]
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

        [HttpPut]
        public ActionResult<CategoryDTO> Update(CategoryDTO categoryDTO)
        {
            var category = _categoryService.Update(categoryDTO);
            if(category == null) 
            {
                return BadRequest("Tên danh mục đã tồn tại hoặc ID không đúng!");
            }
            return Ok(category);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var result = _categoryService.Delete(id);
            if (result==false)
            {
                return NotFound("Không tìm thấy Category!");
            }
            return Ok("Thành công!!!");
        }

        [HttpDelete("{id}/permanently-delete")]
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
