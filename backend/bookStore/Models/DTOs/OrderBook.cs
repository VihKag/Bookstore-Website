namespace bookStore.Models.DTOs
{
    public class OrderBook
    {
        public string Isbn { get; set; } = null!;

        public int? Quantity { get; set; }

        public int? Amount { get; set; }
    }
}
