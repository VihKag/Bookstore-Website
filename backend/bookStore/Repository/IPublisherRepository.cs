using bookStore.Models;
using bookStore.Reponsitory;
using System.Linq.Expressions;

namespace bookStore.Repository
{
    public interface IPublisherRepository: IRepositoryBase<Publisher>
    {
        Publisher FindByID(string ID, params Expression<Func<Publisher, object>>[] includes);
    }
}
