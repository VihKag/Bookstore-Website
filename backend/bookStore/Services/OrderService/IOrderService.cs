using bookStore.Models.DTOs;

namespace bookStore.Services.OrderService
{
    public interface IOrderService
    {
        BookDTO? Create(BookDTO dto);
    }
}
