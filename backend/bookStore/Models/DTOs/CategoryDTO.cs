using Newtonsoft.Json;

namespace bookStore.Models.DTOs
{
    public class CategoryDTO
    {
        public string Id { get; set; } = null!;
        public string? Name { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string? Parent { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string? Description { get; set; }
    }
}
