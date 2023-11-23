using bookStore.Models.DTOs;

namespace bookStore.Services.OrderService
{
    public interface IOrderService
    {
        OrderDTO? Create(OrderDTO dto);
        bool UpdateStatus(string id);
        bool Delete(string id);
        List<GetOrderDTO> GetAllOrderApproved();
        List<GetOrderDTO> GetAllOrderNotYetApprove();
        List<GetOrderDTO> GetAllOrderByUser(string UserID);
        List<GetOrderDetailDTO> GetAllOrderDetailByOrder(string orderID);

    }
}
