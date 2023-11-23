using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Reponsitory;
using bookStore.Reponsitory.Implement;
using bookStore.Repository;
using bookStore.Repository.Implement;
using bookStore.Services.ObjectMapping;
using CloudinaryDotNet;
using NanoidDotNet;
using System.Drawing.Printing;
using System.Linq.Expressions;

namespace bookStore.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly MappingService _mappingService;
        private readonly IOrderRepository _oderRepository;
        private readonly IOrderDetailRepository _orderDetailRepository;
        private readonly IUserRepository _userRepository;
        private readonly IBookRepository _bookRepository;



        public OrderService(MappingService mappingService, IOrderRepository orderRepository, IOrderDetailRepository orderDetailRepository, IUserRepository userRepository, IBookRepository bookRepository)
        {
            _mappingService = mappingService;
            _oderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
            _userRepository = userRepository;
            _bookRepository = bookRepository;  
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
            return true;
        }

        public List<GetOrderDTO> GetAllOrderApproved(int pageNumber, int pageSize)
        {
            return GetOrders(x => x.Status == true, pageNumber, pageSize);
        }

        public List<GetOrderDTO> GetAllOrderByUser(string UserID, int pageNumber, int pageSize)
        {
            return GetOrders(x => x.UserId == UserID, pageNumber, pageSize);
        }
        public List<GetOrderDTO> GetOrders(Expression<Func<Order, bool>> condition, int pageNumber, int pageSize)
        {
            List<Order> entityList = _oderRepository.FindByCondition(condition);
            List<GetOrderDTO> dtoList = new List<GetOrderDTO>();
            foreach (var entity in entityList)
            {
                if (entity.IsDelete != false) 
                {
                    User user = _userRepository.FindById(entity.UserId);

                    GetOrderDTO dto = new GetOrderDTO();

                    dto.Status = entity.Status;
                    dto.Address = entity.Address;
                    dto.OrderDay = entity.OrderDay;
                    dto.UserName = user.Name;
                    dto.Total = entity.Total;
                    dto.Id = entity.Id;

                    dtoList.Add(dto);
                }
                
            }
            var pagedOrderList = GetPagedItems(dtoList, pageNumber, pageSize);
            return pagedOrderList;
        }
        public List<GetOrderDetailDTO> GetAllOrderDetailByOrder(string orderID, int pageNumber, int pageSize)
        {
            List<OrderDetail> entityList = _orderDetailRepository.FindByCondition(x => x.OderId == orderID);
            List<GetOrderDetailDTO> dtoList = new List<GetOrderDetailDTO>();
            foreach (var entity in entityList)
            {
                if (entity.IsDelete!=false)
                {
                    Book book = _bookRepository.FindById(entity.Isbn);

                    GetOrderDetailDTO dto = new GetOrderDetailDTO();
                    dto.Quantity = entity.Quantity;
                    dto.Amount = entity.Amount;
                    dto.BookName = book.Name;
                    dto.Id = entity.Id;

                    dtoList.Add(dto);
                }
                
            }
            var pagedOrderList = GetPagedItems(dtoList, pageNumber, pageSize);
            return pagedOrderList;
        }

        public List<T> GetPagedItems<T>(List<T> itemList, int pageNumber, int pageSize)
        {
            var pagedList = itemList.ToPagedList(pageNumber, pageSize);
            var pagedItemList = pagedList.ToList();
            return pagedItemList;
        }
        public List<GetOrderDTO> GetAllOrderNotYetApprove(int pageNumber, int pageSize)
        {
            return GetOrders(x => x.Status == false, pageNumber, pageSize);
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
