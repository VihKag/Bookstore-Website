using bookStore.Data;
using bookStore.Models;
using bookStore.Reponsitory;
using bookStore.Reponsitory.Implement;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Repository.Implement
{
    public class OrderDetailRepository : RepositoryBase<OrderDetail>, IOrderDetailRepository
    {
        public OrderDetailRepository(DataContext context) : base(context)
        {
        }

        public OrderDetail FindById(string Id, params Expression<Func<OrderDetail, object>>[] includes)
        {
            IQueryable<OrderDetail> query = context.Set<OrderDetail>().Where(x => x.Id == Id);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }
            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}
