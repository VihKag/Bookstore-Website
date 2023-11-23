using bookStore.Models.DTOs;

namespace bookStore.Services.OrderService
{
    public interface IOrderService
    {
        OrderDTO? Create(OrderDTO dto);
    }
}
