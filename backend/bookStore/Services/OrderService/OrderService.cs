using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Reponsitory;
using bookStore.Reponsitory.Implement;
using bookStore.Repository.Implement;
using bookStore.Services.ObjectMapping;
using NanoidDotNet;

namespace bookStore.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly MappingService _mappingService;
        private readonly IOrderRepository _oderRepository;
        private readonly IOrderDetailRepository _orderDetailRepository;



        public OrderService(MappingService mappingService, IOrderRepository orderRepository, IOrderDetailRepository orderDetailRepository)
        {
            _mappingService = mappingService;
            _oderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
        }

        public OrderDTO? Create(OrderDTO dto)
        {
            dto.Id = Nanoid.Generate(size: 10);
            Order order = _mappingService.GetMapper().Map<Order>(dto);
            order.IsDelete = false;
            order.Status = false;
            _oderRepository.Create(order);
            _oderRepository.Save();

            List<OrderBook> orderBooks = dto.OrderBookList;
            foreach(var book in orderBooks) 
            {
                OrderDetailDTO orderDetailDTO = new OrderDetailDTO();
                orderDetailDTO.Id = Nanoid.Generate(size: 10);
                orderDetailDTO.OderId = dto.Id;
                orderDetailDTO.Isbn = book.Isbn;
                orderDetailDTO.Quantity = book.Quantity;
                orderDetailDTO.Amount= book.Amount;
                orderDetailDTO.IsDelete = false;
                OrderDetail orderDetail = _mappingService.GetMapper().Map<OrderDetail>(orderDetailDTO);
                _orderDetailRepository.Create(orderDetail);
                _orderDetailRepository.Save();
            }
            return dto;
        }

        public bool Delete(string id)
        {
            Order order = _oderRepository.FindById(id);
            if (order == null)
            {
                return false;
            }
            order.IsDelete = true;
            _oderRepository.Update(order);
            _oderRepository.Save();

            List<OrderDetail> orderDetails =  _orderDetailRepository.FindByCondition(x => x.OderId == id);
            foreach (var item in orderDetails)
            {
                item.IsDelete = true;
                _orderDetailRepository.Update(item);
                _orderDetailRepository.Save();
            }
            throw new NotImplementedException();
        }

        public bool UpdateStatus(string id)
        {
            Order order = _oderRepository.FindById(id);
            if (order == null)
            {
                return false;
            }
            order.Status = true;
            _oderRepository.Update(order);
            _oderRepository.Save();
            return true;
        }
    }
}
