using bookStore.Data;
using bookStore.Models.DTOs;
using bookStore.Models;
using bookStore.Repository;
using bookStore.Services.ObjectMapping;
using NanoidDotNet;
using System.Drawing.Printing;
using X.PagedList;

namespace bookStore.Services.CategoryService
{
    public class CategoryService: ICategoryService
    {
        private readonly MappingService _mappingService;
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(MappingService mappingService, ICategoryRepository categoryRepository)
        {
            _mappingService = mappingService;
            _categoryRepository = categoryRepository;
        }

        public CategoryDTO? Create(CategoryDTO dto)
        {
           
            //dto.Id = Nanoid.Generate(size: 10);
            Category category = _mappingService.GetMapper().Map<Category>(dto);
            category.IsDelete = false;
 

            _categoryRepository.Create(category);
            _categoryRepository.Save();

            return dto;
        }

        public CategoryDTO? Update(CategoryDTO dto)
        {
            if (dto.Id == null)
            {
                return null;
            }

            Category entity = _categoryRepository.FindByID(dto.Id);
            if (entity == null)
            {
                return null;
            }

            entity.Id = dto.Id;
            entity.Name = dto.Name;
            entity.Parent = dto.Parent; 
            entity.Description = dto.Description;

            _categoryRepository.Update(entity);
            _categoryRepository.Save();

            return dto;
        }

        public bool Delete(string id)
        {
            if (_categoryRepository.FindByID(id) == null)
            {
                return false;
            }

            TemporarilyDelete(id);

            _categoryRepository.Save();

            return true;
        }

        public bool PermanentlyDelete(string id)
        {
            if (_categoryRepository.FindByConditionWithTracking(x => x.Id == id && x.IsDelete == true).FirstOrDefault()! == null)
            {
                return false;
            }

            Category category = _categoryRepository.FindByConditionWithTracking(x => x.Id == id, x => x.BookCategories).FirstOrDefault()!;

            _categoryRepository.Delete(category);
            _categoryRepository.Save();

            return true;
        }

        public List<CategoryDTO> GetAll()
        {
            List<Category> entityList = _categoryRepository.FindAll();
            List<CategoryDTO> dtoList = new List<CategoryDTO>();
            foreach (Category entity in entityList)
            {
                CategoryDTO dto = _mappingService.GetMapper().Map<CategoryDTO>(entity);
                dtoList.Add(dto);

            }
            return dtoList;
        }

        public CategoryDTO? GetById(string id)
        {
            Category entity = _categoryRepository.FindByID(id);
            if (entity == null)
            {
                return null;
            }

            CategoryDTO dto = _mappingService.GetMapper().Map<CategoryDTO>(entity);

            return dto;
        }

        public CategoryDTO? GetByName(string name)
        {
            Category entity = _categoryRepository.FindByName(name);
            if (entity == null)
            {
                return null;
            }

            CategoryDTO dto = _mappingService.GetMapper().Map<CategoryDTO>(entity);

            return dto;
        }

        public CategoryDTO? Restore(string id)
        {
            Category entity = _categoryRepository.FindByConditionWithTracking(x => x.Id == id && x.IsDelete == true).FirstOrDefault()!;
            if (entity == null)
            {
                return null;
            }
            if (entity.IsDelete == false)
            {
                return null;
            }

            entity.IsDelete = false;

            _categoryRepository.Update(entity);
            _categoryRepository.Save();

            CategoryDTO dto = _mappingService.GetMapper().Map<CategoryDTO>(entity);

            return dto;
        }

        public List<CategoryDTO> GetAllDeleted()
        {
            List<Category> entityList = _categoryRepository.FindByCondition(x => x.IsDelete == true);
            List<CategoryDTO> dtoList = new List<CategoryDTO>();
            foreach (Category entity in entityList)
            {
                CategoryDTO dto = _mappingService.GetMapper().Map<CategoryDTO>(entity);
                dtoList.Add(dto);
            }

            return dtoList;
        }

        private bool ValidateObject(CategoryDTO dto)
        {
            Category entity = _categoryRepository.FindByName(dto.Name);
            if (entity == null)
            {
                return true;
            }
            return false;
        }


        public void TemporarilyDelete(string id)
        {
            Category category = _categoryRepository.FindByConditionWithTracking(x => x.Id == id, x => x.BookCategories).FirstOrDefault()!;

            category.IsDelete = true;
        }

        public List<CategoryDTO> PaginationCategory(int pageNumber,int pageSize)
        {
            var allCategories = GetAll();

            var pagedCategories = allCategories.ToPagedList(pageNumber, pageSize);
            var pagedCategoriesList = pagedCategories.ToList();
            return pagedCategoriesList;
        }
    }
}

