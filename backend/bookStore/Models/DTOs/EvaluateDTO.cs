namespace bookStore.Models.DTOs
{
    public class EvaluateDTO
    {
        public string Id { get; set; } = null!;

        public string? Isbn { get; set; }

        public string? UserId { get; set; }

        public double? Vote { get; set; }

        public string? Comment { get; set; }
    }
}
