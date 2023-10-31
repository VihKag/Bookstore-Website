using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class BookPublisher 
{
    public string Id { get; set; } = null!;

    public string? Isbn { get; set; }

    public string? PubId { get; set; }

    public virtual Book? IsbnNavigation { get; set; }

    public virtual Publisher? Pub { get; set; }
}
