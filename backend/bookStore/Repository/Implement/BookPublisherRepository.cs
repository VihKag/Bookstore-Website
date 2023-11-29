using bookStore.Data;
using bookStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace bookStore.Reponsitory.Implement
{
    public class BookPublisherRepository : RepositoryBase<BookPublisher>, IBookPublisherRepository
    {
        public BookPublisherRepository(DataContext context) : base(context)
        {
        }
      
    }
}

