using bookStore.Models;
using System.Linq.Expressions;

namespace bookStore.Reponsitory
{
    public interface IAuthorRepository : IRepositoryBase<Author>
    {
        Author FindById(string Id, params Expression<Func<Author, object>>[] includes);
    }
}
