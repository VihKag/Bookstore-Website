using bookStore.Data;
using bookStore.Models;
using bookStore.Reponsitory.Implement;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Repository.Implement
{
    public class ImageRepository : RepositoryBase<Image>, IImageRepository
    {
        public ImageRepository(DataContext context) : base(context)
        {
        }

        public Image FindById(long? Id, params Expression<Func<Image, object>>[] includes)
        {
            IQueryable<Image> query = context.Set<Image>().Where(x => x.Id == Id);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return query.AsNoTracking().FirstOrDefault()!;
        }
    }
}
