using bookStore.Data;
using bookStore.Models;
using Microsoft.EntityFrameworkCore;
using NuGet.Common;
using System.Linq.Expressions;
using System.Security.Principal;

namespace bookStore.Reponsitory.Implement
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    { 

        protected readonly DataContext context;

        protected RepositoryBase(DataContext context)
        {
            this.context = context;
        }

        public List<T> FindAll(params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = context.Set<T>();

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.AsNoTracking().ToList();
        }

        public List<T> FindByCondition(Expression<Func<T, bool>> expression, params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = context.Set<T>().Where(expression);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.AsNoTracking().ToList();
        }

        public List<T> FindByConditionWithTracking(Expression<Func<T, bool>> expression, params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = context.Set<T>().Where(expression);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.ToList();
        }


        public void Create(T entity) => context.Set<T>().Add(entity);

        public void Update(T entity) => context.Set<T>().Update(entity);

        public void Delete(T entity) => context.Set<T>().Remove(entity);

        public void Save() => context.SaveChanges();

        public void Attach(Object entity) => context.Attach(entity);

        public IQueryable<T> QueryAll(params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = context.Set<T>();

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.AsNoTracking();
        }
    }
}
