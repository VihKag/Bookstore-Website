namespace bookStore.Models.DTOs
{
    public class TokenDTO
    {
        public string AccessToken { get; set; } = String.Empty;
        public RefreshToken RefreshToken { get; set; }
    }
}
