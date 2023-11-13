using bookStore.Data;
using bookStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Reponsitory.Implement
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(DataContext context) : base(context)
        {
        }

        public User FindById(string ID, params Expression<Func<User, object>>[] includes)
        {
            IQueryable<User> query = context.Set<User>().Where(x => x.Id == ID);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}
