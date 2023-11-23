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
    }
}
