using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class Publisher 
{
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public bool? IsDelete { get; set; }

    public virtual ICollection<BookPublisher> BookPublishers { get; set; } = new List<BookPublisher>();
}
