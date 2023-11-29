using Newtonsoft.Json;

namespace bookStore.Models.DTOs
{
    public class PublisherDTO
    {
        public string Id { get; set; } = null!;

        public string Name { get; set; } = null!;

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string? Description { get; set; }
    }
}
