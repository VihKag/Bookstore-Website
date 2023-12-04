using bookStore.Data;
using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Reponsitory;
using bookStore.Services.ObjectMapping;
using X.PagedList;

namespace bookStore.Services.AuthorService
{
    public class AuthorService : IAuthorSevice
    {

        private readonly MappingService _mappingService;
        private readonly IAuthorRepository _authorRepository;

        public AuthorService( MappingService mappingService, IAuthorRepository authorRepository)
        {
            _mappingService = mappingService;
            _authorRepository = authorRepository;
        }
        public AuthorDTO? Create(AuthorDTO dto)
        {
            //dto.Id = Nanoid.Generate(size: 10);
            Author author = _mappingService.GetMapper().Map<Author>(dto);
            author.IsDelete = false;


            _authorRepository.Create(author);
            _authorRepository.Save();

            return dto;
        }

        public bool Delete(string id)
        {
            if (_authorRepository.FindById(id) == null)
            {
                return false;
            }

            TemporarilyDelete(id);

            _authorRepository.Save();

            return true;
        }
        public void TemporarilyDelete(string id)
        {
            Author author = _authorRepository.FindByConditionWithTracking(x => x.AuthorId == id, x => x.BookAuthors).FirstOrDefault()!;

            author.IsDelete = true;
        }

        public List<AuthorDTO> GetAll()
        {
            List<Author> entityList = _authorRepository.FindAll();
            List<AuthorDTO> dtoList = new List<AuthorDTO>();
            foreach (Author entity in entityList)
            {
                AuthorDTO dto = _mappingService.GetMapper().Map<AuthorDTO>(entity);
                dtoList.Add(dto);

            }
            return dtoList;
        }

        public List<AuthorDTO> GetAllDeleted()
        {
            List<Author> entityList = _authorRepository.FindByCondition(x => x.IsDelete == true);
            List<AuthorDTO> dtoList = new List<AuthorDTO>();
            foreach (Author entity in entityList)
            {
                AuthorDTO dto = _mappingService.GetMapper().Map<AuthorDTO>(entity);
                dtoList.Add(dto);
            }

            return dtoList;
        }


        public AuthorDTO? GetById(string id)
        {
            Author entity = _authorRepository.FindById(id);
            if (entity == null)
            {
                return null;
            }

            AuthorDTO dto = _mappingService.GetMapper().Map<AuthorDTO>(entity);

            return dto;
        }

        public AuthorDTO? GetByName(string name)
        {
            Author entity = _authorRepository.FindByName(name);
            if (entity == null)
            {
                return null;
            }

            AuthorDTO dto = _mappingService.GetMapper().Map<AuthorDTO>(entity);

            return dto;
        }

        public bool PermanentlyDelete(string id)
        {
            if (_authorRepository.FindByConditionWithTracking(x => x.AuthorId == id && x.IsDelete == true).FirstOrDefault()! == null)
            {
                return false;
            }

            Author author = _authorRepository.FindByConditionWithTracking(x => x.AuthorId == id, x => x.BookAuthors).FirstOrDefault()!;

            _authorRepository.Delete(author);
            _authorRepository.Save();

            return true;
        }

        public AuthorDTO? Restore(string id)
        {
            Author entity = _authorRepository.FindByConditionWithTracking(x => x.AuthorId == id && x.IsDelete == true).FirstOrDefault()!;
            if (entity == null)
            {
                return null;
            }
            if (entity.IsDelete == false)
            {
                return null;
            }

            entity.IsDelete = false;

            _authorRepository.Update(entity);
            _authorRepository.Save();

            AuthorDTO dto = _mappingService.GetMapper().Map<AuthorDTO>(entity);

            return dto;
        }

        public AuthorDTO? Update(AuthorDTO dto, string authorID)
        {
            if (dto.AuthorId == null)
            {
                return null;
            }

            Author entity = _authorRepository.FindById(dto.AuthorId);
            if (entity == null)
            {
                return null;
            }

            entity.AuthorId = dto.AuthorId;
            entity.Name = dto.Name;
            entity.Description = dto.Description;

            _authorRepository.Update(entity);
            _authorRepository.Save();

            return dto;
        }
        public List<AuthorDTO> PaginationAuthor(int pageNumber, int pageSize)
        {
            var allAuthors = GetAll();

            var pagedAuthors = allAuthors.ToPagedList(pageNumber, pageSize);
            var pagedAuthorsList = pagedAuthors.ToList();
            return pagedAuthorsList;
        }

        public List<AuthorDTO> GetAllNotDeleted()
        {
            List<Author> entityList = _authorRepository.FindByCondition(x => x.IsDelete == false);
            List<AuthorDTO> dtoList = new List<AuthorDTO>();
            foreach (Author entity in entityList)
            {
                AuthorDTO dto = _mappingService.GetMapper().Map<AuthorDTO>(entity);
                dtoList.Add(dto);
            }

            return dtoList;
        }

        public List<AuthorDTO> PaginationNotDeleted(int pageNumber, int pageSize)
        {
            var allNotDeleted = GetAllNotDeleted();
            var pagedAuthors = allNotDeleted.ToPagedList(pageNumber, pageSize);
            var pagedAuthorsList = pagedAuthors.ToList();
            return pagedAuthorsList;
        }
    }
}
