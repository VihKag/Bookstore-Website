using bookStore.Data;
using bookStore.Models;
using bookStore.Reponsitory;
using bookStore.Reponsitory.Implement;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Repository.Implement
{
    public class OrderRepository : RepositoryBase<Order>, IOrderRepository
    {
        public OrderRepository(DataContext context) : base(context)
        {
        }

        public Order FindById(string Id, params Expression<Func<Order, object>>[] includes)
        {
            IQueryable<Order> query = context.Set<Order>().Where(x => x.Id == Id);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }
            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}
