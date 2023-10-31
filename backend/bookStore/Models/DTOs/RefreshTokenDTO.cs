namespace bookStore.Models.DTOs
{
    public class RefreshTokenDTO
    {
        public string Token { get; set; } = null!;

        public string? ParentID { get; set; }

        public string? UserId { get; set; }

        public bool IsUsed { get; set; }

        public bool IsRevoked { get; set; }

        public DateTime? ExpireAt { get; set; }
    }
}
