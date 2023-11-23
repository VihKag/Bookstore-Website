using bookStore.Models;
using System.Linq.Expressions;

namespace bookStore.Reponsitory
{
    public interface IOrderDetailRepository : IRepositoryBase<OrderDetail>
    {
        OrderDetail FindById(string Id, params Expression<Func<OrderDetail, object>>[] includes);
    }
}
