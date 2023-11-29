using bookStore.Data;
using bookStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Reponsitory.Implement
{
    public class  BookRepository : RepositoryBase<Book>, IBookRepository
    {
        public BookRepository(DataContext context) : base(context)
        {
        }

        public Book FindById(string ID, params Expression<Func<Book, object>>[] includes)
        {
            IQueryable<Book> query = context.Set<Book>().Where(x => x.Isbn == ID);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}

