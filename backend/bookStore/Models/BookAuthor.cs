using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class BookAuthor 
{
    public string Id { get; set; } = null!;

    public string? AuthorId { get; set; }

    public string? Isbn { get; set; }

    public bool? IsDelete { get; set; }

    public virtual Author? Author { get; set; }

    public virtual Book? IsbnNavigation { get; set; }
}
