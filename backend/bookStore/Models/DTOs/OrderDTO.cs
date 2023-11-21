namespace bookStore.Models.DTOs
{
    public class OrderDTO
    {
        public string Id { get; set; } = null!;

        public string? UserId { get; set; }

        public int? Total { get; set; }

        public DateTime? OrderDay { get; set; }

        public string Address { get; set; } = null!;

        public virtual List<OrderBook> OrderBookList { get; set; } = new List<OrderBook>();
    }
}
