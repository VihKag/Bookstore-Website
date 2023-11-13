using bookStore.Models;
using bookStore.Reponsitory;
using System.Linq.Expressions;

namespace bookStore.Repository
{
    public interface IRoleRepository : IRepositoryBase<Role>
    {
        Role FindByID(string Id, params Expression<Func<Role, object>>[] includes);
    }
}
