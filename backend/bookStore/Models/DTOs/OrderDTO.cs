namespace bookStore.Models.DTOs
{
    public class OrderDTO
    {
        public string Id { get; set; } = null!;

        public string? UserId { get; set; }

        public int? Total { get; set; }

        public DateTime? OrderDay { get; set; }

        public bool? Status { get; set; }

        public string Address { get; set; } = null!;

        public bool? IsDelete { get; set; }

        public virtual List<string> OrderDetailList { get; set; } = new List<string>();
    }
}
