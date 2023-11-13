using bookStore.Models;
using System.Linq.Expressions;

namespace bookStore.Reponsitory
{
    public interface IOderRepository: IRepositoryBase<Order>
    {
        Order FindById(string Id, params Expression<Func<Order, object>>[] includes);
    }
}
