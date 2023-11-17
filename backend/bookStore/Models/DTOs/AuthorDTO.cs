using Newtonsoft.Json;

namespace bookStore.Models.DTOs
{
    public class AuthorDTO
    {
        public string AuthorId { get; set; } = null!;

        public string Name { get; set; } = null!;

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string? Description { get; set; }
    }
}
