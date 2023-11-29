using System.Text.Json.Serialization;

namespace bookStore.Models.DTOs
{
    public class UserDTO
    {
        [JsonIgnore]
        public string? Password { get; set; }

        public string Id { get; set; } = null!;

        public string? Email { get; set; }

        public string? Name { get; set; }

        public string? Phone { get; set; }

        public string? UserName { get; set; }

    }
}
