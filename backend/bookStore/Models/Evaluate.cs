using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class Evaluate
{
    public string Id { get; set; } = null!;

    public string? Isbn { get; set; }

    public string? UserId { get; set; }

    public double? Vote { get; set; }

    public string? Comment { get; set; }

    public virtual Book? IsbnNavigation { get; set; }

    public virtual User? User { get; set; }
}
