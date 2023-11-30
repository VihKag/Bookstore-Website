using bookStore.Models;
using bookStore.Reponsitory;
using System.Linq.Expressions;

namespace bookStore.Repository
{
    public interface IFavoriteRepository : IRepositoryBase<Favorite>
    {
        Favorite FindByID(string ID, params Expression<Func<Favorite, object>>[] includes);
    }
}
