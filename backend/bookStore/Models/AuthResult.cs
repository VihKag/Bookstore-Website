using System.Text.Json.Serialization;

namespace bookStore.Models
{
    public class AuthResult
    {
        public Object? Token { get; set; }
        public bool Result { get; set; }
        public List<string>? Errors { get; set; }
        public Object? User { get; set; }

        [JsonIgnore]
        public RefreshToken RefreshToken { get; set; }
    }
}
