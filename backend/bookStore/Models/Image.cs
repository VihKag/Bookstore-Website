using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class Image 
{
    public long? Id { get; set; } = null!;

    public string? Name { get; set; }

    public string? Isbn { get; set; }

    public virtual Book? IsbnNavigation { get; set; }
}
