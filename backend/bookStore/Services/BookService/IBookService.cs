using bookStore.Models;
using bookStore.Models.DTOs;

namespace bookStore.Services.BookService
{
    public interface IBookService
    {
        BookDTO? Create(BookDTO dto);
        bool Delete(string isbn);
        List<BookDTO> GetAll(int pageNumber, int pageSize);
        List<BookDTO> GetAllNotDelete(int pageNumber, int pageSize);
        BookDTO? GetById(string isbn);
        List<BookDTO> GetByCate(string cateName, int pageNumber, int pageSize);
        List<BookDTO> GetByAuthor(string authorName, int pageNumber, int pageSize);
        List<BookDTO> GetByPublisher (string pubName, int pageNumber, int pageSize);
        List<BookDTO> SearchByTitle(string title);
        bool PermanentlyDelete(string isbn);
        bool Restore(string isbn);
        BookDTO? Update(BookDTO dto, string isbn);

    }
}
