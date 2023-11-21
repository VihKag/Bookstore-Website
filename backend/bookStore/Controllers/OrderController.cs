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
    }
}
