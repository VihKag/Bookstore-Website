using bookStore.Data;
using bookStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Reponsitory.Implement
{
    public class  BookAuhtorRepository : RepositoryBase<BookAuthor>, IBookAuthorRepository
    {
        public BookAuhtorRepository(DataContext context) : base(context)
        {
        }

     
    }
}

