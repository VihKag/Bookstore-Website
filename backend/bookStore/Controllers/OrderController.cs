using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Services.BookService;
using bookStore.Services.OrderService;
using Microsoft.AspNetCore.Mvc;

namespace bookStore.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        public ActionResult<OrderDTO> Create(OrderDTO orderDTO)
        {
            var order = _orderService.Create(orderDTO);
            if (order == null)
            {
                return BadRequest("Tạo đơn hàng thất bại!");
            }
            return Ok(order);
        }
        [HttpDelete]
        public ActionResult<bool> Delete(string id)
        {
            bool result = _orderService.Delete(id);
            if (result == false)
            {
                return Ok("Thất bại! Hãy kiểm tra lại dữ liệu truyền vào!");
            }

            return Ok("Đã xóa!");
        }
        [HttpPut]
        public ActionResult<bool> UpdateStatus(string id)
        {
            bool result = _orderService.UpdateStatus(id);
            if (result == false)
            {
                return Ok("Thất bại! Hãy kiểm tra lại dữ liệu truyền vào!");
            }

            return Ok("Duyệt thành công!");
        }
        [HttpGet("approved")]
        public ActionResult<List<GetOrderDTO>> GetAllOrderApproved(int pageNumber, int pageSize)
        {
            var order = _orderService.GetAllOrderApproved(pageNumber, pageSize);
            if (order == null)
            {
                return Ok("Không lấy được danh sách đơn hàng đã duyệt.");
            }
            return Ok(order);
        }
        [HttpGet("notapprove")]
        public ActionResult<List<GetOrderDTO>> GetAllOrderNotYetApprove(int pageNumber, int pageSize)
        {
            var order = _orderService.GetAllOrderApproved(pageNumber, pageSize);
            if (order == null)
            {
                return Ok("Không có đơn hàng chưa duyệt.");
            }
            return Ok(order);
        }
        [HttpGet("byuser")]
        public ActionResult<List<GetOrderDTO>> GetAllOrderByUser(string UserID, int pageNumber, int pageSize)
        {
            var order = _orderService.GetAllOrderByUser( UserID, pageNumber, pageSize);
            if (order == null)
            {
                return Ok("Người dùng không có đơn đặt hàng.");
            }
            return Ok(order);
        }
        [HttpGet("orderdetail")]
        public ActionResult<List<GetOrderDetailDTO>> GetAllOrderDetailByOrder(string orderID, int pageNumber, int pageSize)
        {
            var order = _orderService.GetAllOrderDetailByOrder(orderID, pageNumber, pageSize);
            if (order == null)
            {
                return Ok("Không lấy được chi tiết đơn hàng.");
            }
            return Ok(order);
        }
    }
}
