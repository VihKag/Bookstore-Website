using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class BookCategory 
{
    public string Id { get; set; } = null!;

    public string? Isbn { get; set; }

    public string? CateId { get; set; }

    public bool? IsDelete { get; set; }

    public virtual Category? Cate { get; set; }

    public virtual Book? IsbnNavigation { get; set; }
}
