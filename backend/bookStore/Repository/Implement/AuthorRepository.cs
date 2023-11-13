using bookStore.Data;
using bookStore.Models;
using bookStore.Reponsitory.Implement;
using bookStore.Reponsitory;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Repository.Implement
{
    public class AuthorRepository : RepositoryBase<Author>, IAuthorRepository
    {
        public AuthorRepository(DataContext context) : base(context)
        {
        }

        public Author FindById(string ID, params Expression<Func<Author, object>>[] includes)
        {
            IQueryable<Author> query = context.Set<Author>().Where(x => x.AuthorId == ID);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}
