namespace bookStore.Models.DTOs
{
    public class FavoriteDTO
    {
        public string Id { get; set; } = null!;

        public string? Isbn { get; set; }

        public string? UserId { get; set; }
    }
}
