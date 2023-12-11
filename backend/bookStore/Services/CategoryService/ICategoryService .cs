using bookStore.Models;
using bookStore.Models.DTOs;
using X.PagedList;

namespace bookStore.Services.CategoryService
{
    public interface ICategoryService
    {
        CategoryDTO? Create(CategoryDTO dto);
        bool Delete(string id);
        List<CategoryDTO> GetAll();
        PagedList<CategoryDTO> PaginationCategory(int pageNumber, int pageSize);
        List<CategoryDTO> GetAllNotDeleted();
        PagedList<CategoryDTO> PaginationNotDeleted(int pageNumber, int pageSize);
        CategoryDTO? GetById(string id);
        CategoryDTO? GetByName(string name);
        bool PermanentlyDelete(string id);
        CategoryDTO? Restore(string id);
        CategoryDTO? Update(CategoryDTO dto, string cateID);

    }
}
