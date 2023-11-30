namespace bookStore.Models.DTOs
{
    public class GetOrderDetailDTO
    {
        public string Id { get; set; } = null!;

        public string BookName { get; set; } = null!;

        public int? Quantity { get; set; }

        public int? Amount { get; set; }
    }
}
