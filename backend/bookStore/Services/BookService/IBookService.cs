﻿using bookStore.Models;
using bookStore.Models.DTOs;

namespace bookStore.Services.BookService
{
    public interface IBookService
    {
        BookDTO? Create(BookDTO dto);
        bool Delete(string isbn);
        List<BookDTO> GetAll();
        List<BookDTO> GetAllDeleted();
        BookDTO? GetById(string isbn);
        List<BookDTO> GetByCate(string cateName);
        List<BookDTO> GetByAuthor(string authorName);
        List<BookDTO> GetByPublisher (string pubName);
        List<BookDTO> SearchByTitle(string title);
        BookDTO? GetByName(string name);
        bool PermanentlyDelete(string isbn);
        BookDTO? Restore(string isbn);
        BookDTO? Update(BookDTO dto);
        List<BookDTO> PaginationBook(int pageNumber, int pageSize);

    }
}
