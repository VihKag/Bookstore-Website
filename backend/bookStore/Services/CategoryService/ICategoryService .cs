using bookStore.Models;
using bookStore.Models.DTOs;

namespace bookStore.Services.CategoryService
{
    public interface ICategoryService
    {
        CategoryDTO? Create(CategoryDTO dto);
        bool Delete(string id);
        List<CategoryDTO> GetAll();
        List<CategoryDTO> PaginationCategory(int pageNumber, int pageSize);
        List<CategoryDTO> GetAllDeleted();
        CategoryDTO? GetById(string id);
        CategoryDTO? GetByName(string name);
        bool PermanentlyDelete(string id);
        CategoryDTO? Restore(string id);
        CategoryDTO? Update(CategoryDTO dto);

    }
}
