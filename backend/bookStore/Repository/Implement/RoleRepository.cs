using bookStore.Data;
using bookStore.Models;
using bookStore.Reponsitory.Implement;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Repository.Implement
{
    public class RoleRepository : RepositoryBase<Role>, IRoleRepository
    {
        public RoleRepository(DataContext context) : base(context)
        {
        }

        public Role FindByID(string Id, params Expression<Func<Role, object>>[] includes)
        {
            IQueryable<Role> query = context.Set<Role>().Where(x => x.Id == Id);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}
