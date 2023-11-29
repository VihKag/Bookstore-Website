using bookStore.Models.DTOs;

namespace bookStore.Services.OrderService
{
    public interface IOrderService
    {
        OrderDTO? Create(OrderDTO dto);
        bool UpdateStatus(string id);
        bool Delete(string id);
        List<GetOrderDTO> GetAllOrderApproved(int pageNumber, int pageSize);
        List<GetOrderDTO> GetAllOrderNotYetApprove(int pageNumber, int pageSize);
        List<GetOrderDTO> GetAllOrderByUser(string UserID, int pageNumber, int pageSize);
        List<GetOrderDetailDTO> GetAllOrderDetailByOrder(string orderID, int pageNumber, int pageSize);

    }
}
