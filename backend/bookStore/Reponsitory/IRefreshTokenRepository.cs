using bookStore.Models;
using System.Linq.Expressions;

namespace bookStore.Reponsitory
{
    public interface IRefreshTokenRepository : IRepositoryBase<RefreshToken>
    {
        RefreshToken FindById(string Id, params Expression<Func<RefreshToken, object>>[] includes);
    }
}
