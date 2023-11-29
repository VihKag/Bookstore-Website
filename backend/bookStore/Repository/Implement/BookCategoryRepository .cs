using bookStore.Data;
using bookStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Reponsitory.Implement
{
    public class BookCategoryRepository : RepositoryBase<BookCategory>, IBookCategoryRepository
    {
        public BookCategoryRepository(DataContext context) : base(context)
        {
        }

    }
}

