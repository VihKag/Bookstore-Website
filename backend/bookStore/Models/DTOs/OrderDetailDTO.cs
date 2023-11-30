namespace bookStore.Models.DTOs
{
    public class OrderDetailDTO
    {
        public string Id { get; set; } = null!;

        public string? OderId { get; set; }

        public string Isbn { get; set; } = null!;

        public int? Quantity { get; set; }

        public int? Amount { get; set; }

        public bool? IsDelete { get; set; }
    }
}
