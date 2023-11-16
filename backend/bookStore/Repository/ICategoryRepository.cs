using bookStore.Models;
using bookStore.Reponsitory;
using Microsoft.EntityFrameworkCore.Query;
using System.Linq.Expressions;

namespace bookStore.Repository
{
    public interface ICategoryRepository: IRepositoryBase<Category>
    {
        Category FindByID(string ID, params Expression<Func<Category, object>>[] includes);
        Category FindByName(string name);
    }
}
