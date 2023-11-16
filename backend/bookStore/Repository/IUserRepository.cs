using bookStore.Models;
using System.Linq.Expressions;

namespace bookStore.Reponsitory
{
    public interface IUserRepository : IRepositoryBase<User>
    {
        User FindById(string Id, params Expression<Func<User, object>>[] includes);
    }
}
