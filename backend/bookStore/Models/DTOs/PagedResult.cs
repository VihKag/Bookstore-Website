using X.PagedList;

namespace bookStore.Models.DTOs
{
    public class PagedResult<T>
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
        public T Content { get; set; }
    }
}
