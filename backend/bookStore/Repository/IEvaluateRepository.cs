using bookStore.Models;
using bookStore.Reponsitory;
using System.Linq.Expressions;

namespace bookStore.Repository
{
    public interface IEvaluateRepository : IRepositoryBase<Evaluate>
    {
        Evaluate FindByID(string ID, params Expression<Func<Evaluate, object>>[] includes);
    }
}
