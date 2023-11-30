using bookStore.Data;
using bookStore.Models;
using bookStore.Reponsitory.Implement;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Repository.Implement
{
    public class EvaluateRepository : RepositoryBase<Evaluate>, IEvaluateRepository
    {
        public EvaluateRepository(DataContext context) : base(context)
        { 
        }

        public Evaluate FindByID(string ID, params Expression<Func<Evaluate, object>>[] includes)
        {
            IQueryable<Evaluate> query = context.Set<Evaluate>().Where(x => x.Id == ID);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }
            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}
