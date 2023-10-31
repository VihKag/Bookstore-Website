using bookStore.Data;
using bookStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Reponsitory.Implement
{
    public class RefreshTokenRepository : RepositoryBase<RefreshToken>, IRefreshTokenRepository
    {

        public RefreshTokenRepository(DataContext context) : base(context)
        {
        }

        public RefreshToken FindById(string Token, params Expression<Func<RefreshToken, object>>[] includes)
        {
            IQueryable<RefreshToken> query = context.Set<RefreshToken>().Where(x => x.Token == Token);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}
