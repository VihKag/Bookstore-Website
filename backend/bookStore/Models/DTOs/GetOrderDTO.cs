namespace bookStore.Models.DTOs
{
    public class GetOrderDTO
    {
        public string Id { get; set; } = null!;

        public string? UserName { get; set; }

        public int? Total { get; set; }

        public DateTime? OrderDay { get; set; }

        public string Address { get; set; } = null!;

        public bool? Status { get; set; }

    }
}
