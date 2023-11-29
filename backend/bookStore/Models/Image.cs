using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class Image 
{
    public string Id { get; set; } = null!;

    public string? Name { get; set; }

    public virtual ICollection<Book> Books { get; set; } = new List<Book>();
}
