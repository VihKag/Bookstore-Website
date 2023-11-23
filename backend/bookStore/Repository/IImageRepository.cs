using bookStore.Models;
using bookStore.Reponsitory;
using System.Linq.Expressions;

namespace bookStore.Repository
{
    public interface IImageRepository : IRepositoryBase<Image>
    {
        Image FindById(string Id, params Expression<Func<Image, object>>[] includes);
    }
}
