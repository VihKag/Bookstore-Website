using bookStore.Data;
using bookStore.Models;
using bookStore.Reponsitory.Implement;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Repository.Implement
{
    public class FavoriteRepository : RepositoryBase<Favorite>, IFavoriteRepository
    {
        public FavoriteRepository(DataContext context) : base(context)
        {
        }

        public Favorite FindByID(string ID, params Expression<Func<Favorite, object>>[] includes)
        {
            IQueryable<Favorite> query = context.Set<Favorite>().Where(x => x.Id == ID);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }
            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}
