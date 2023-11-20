using bookStore.Models.DTOs;
using bookStore.Reponsitory;
using bookStore.Repository.Implement;
using bookStore.Services.ObjectMapping;

namespace bookStore.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly MappingService _mappingService;
        private readonly IOrderDetailRepository _oderRepository;


        public OrderService(MappingService mappingService, IOrderDetailRepository orderRepository)
        {
            _mappingService = mappingService;
            _oderRepository = orderRepository;
        }

        public BookDTO? Create(BookDTO dto)
        {
            throw new NotImplementedException();
        }
    }
}
