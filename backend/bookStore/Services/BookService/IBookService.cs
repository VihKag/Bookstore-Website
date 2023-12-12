using bookStore.Models;
using bookStore.Models.DTOs;
using X.PagedList;

namespace bookStore.Services.BookService
{
    public interface IBookService
    {
        BookDTO? Create(BookDTO dto);
        bool Delete(string isbn);
        PagedList<BookDTO> GetAll(int pageNumber, int pageSize);
        PagedList<BookDTO> GetAllNotDelete(int pageNumber, int pageSize);
        BookDTO? GetById(string isbn);
        PagedList<BookDTO> GetByCate(string cateName, int pageNumber, int pageSize);
        PagedList<BookDTO> GetByAuthor(string authorName, int pageNumber, int pageSize);
        PagedList<BookDTO> GetByPublisher (string pubName, int pageNumber, int pageSize);
        List<BookDTO> SearchByTitle(string title);
        bool PermanentlyDelete(string isbn);
        bool Restore(string isbn);
        BookDTO? Update(BookDTO dto, string isbn);

    }
}
