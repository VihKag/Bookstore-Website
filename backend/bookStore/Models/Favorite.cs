using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class Favorite 
{
    public string Id { get; set; } = null!;

    public string? Isbn { get; set; }

    public string? UserId { get; set; }

    public virtual Book? IsbnNavigation { get; set; }

    public virtual User? User { get; set; }
}
