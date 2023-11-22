namespace bookStore.Models.DTOs
{
    public class BookDTO
    {
        public string Isbn { get; set; } = null!;

        public string Name { get; set; } = null!;

        public string? Description { get; set; }

        public double? Price { get; set; }

        public int? Quantity { get; set; }

        public DateTime Date { get; set; }

        public string? PageCount { get; set; }

        public string? Language { get; set; }

        public bool? State { get; set; }

        //public string? ImageId { get; set; }

        public virtual List<string> CategoryList { get; set; } = new List<string>();
        public virtual List<string> AuthorList { get; set; } = new List<string>();
        public virtual List<string> PublisherList { get; set; } = new List<string>();
    }
}
