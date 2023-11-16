using bookStore.Data;
using bookStore.Models;
using bookStore.Reponsitory.Implement;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Repository.Implement
{
    public class CategoryRepository: RepositoryBase<Category>,ICategoryRepository
    {
        public CategoryRepository(DataContext context) : base(context)
        {
        }

        public Category FindByID(string ID, params Expression<Func<Category, object>>[] includes)
        {
            IQueryable<Category> query = context.Set<Category>().Where(x => x.Id == ID);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }
            return query.AsNoTracking().FirstOrDefault()!;
        }

        public Category FindByName(string name)
        {
              return context.Categories.FirstOrDefault(c => c.Name == name);
        }
    }
}
