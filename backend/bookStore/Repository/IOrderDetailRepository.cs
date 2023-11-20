using bookStore.Models;
using System.Linq.Expressions;

namespace bookStore.Reponsitory
{
    public interface IOrderDetailRepository : IRepositoryBase<Order>
    {
        OrderDetail FindById(string Id, params Expression<Func<Order, object>>[] includes);
    }
}
