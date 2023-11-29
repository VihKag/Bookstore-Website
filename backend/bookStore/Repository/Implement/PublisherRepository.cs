using bookStore.Data;
using bookStore.Models;
using bookStore.Reponsitory.Implement;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Repository.Implement
{
    public class PublisherRepository : RepositoryBase<Publisher>, IPublisherRepository
    {
        public PublisherRepository(DataContext context) : base(context)
        {
        }


        public Publisher FindByID(string ID, params Expression<Func<Publisher, object>>[] includes)
        {
            IQueryable<Publisher> query = context.Set<Publisher>().Where(x => x.Id == ID);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }
            return query.AsNoTracking().FirstOrDefault()!;
        }

        public Publisher FindByName(string name)
        {
            return context.Publishers.FirstOrDefault(c => c.Name == name);
        }
    }
}
