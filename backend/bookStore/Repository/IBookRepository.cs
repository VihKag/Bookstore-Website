using bookStore.Models;
using System.Linq.Expressions;

namespace bookStore.Reponsitory
{
    public interface IBookRepository : IRepositoryBase<Book>
    {
        Book FindById(string Id, params Expression<Func<Book, object>>[] includes);
        Book FindByName(string name);
    }
    
}
