using bookStore.Models.DTOs;

namespace bookStore.Services.AuthorService
{
    public interface IAuthorSevice
    {
        AuthorDTO? Create(AuthorDTO dto);
        bool Delete(string id);
        List<AuthorDTO> GetAll();
        List<AuthorDTO> GetAllNotDeleted();
        List<AuthorDTO> PaginationNotDeleted(int pageNumber, int pageSize);
        AuthorDTO? GetById(string id);
        AuthorDTO? GetByName(string name);
        bool PermanentlyDelete(string id);
        AuthorDTO? Restore(string id);
        AuthorDTO? Update(AuthorDTO dto, string authorID);
        List<AuthorDTO> PaginationAuthor(int pageNumber, int pageSize);
    }
}
