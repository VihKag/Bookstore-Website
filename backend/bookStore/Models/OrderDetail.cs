using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class OrderDetail 
{
    public string Id { get; set; } = null!;

    public string? OderId { get; set; }

    public string Isbn { get; set; } = null!;

    public int? Quantity { get; set; }

    public int? Amount { get; set; }

    public bool? IsDelete { get; set; }

    public virtual Book IsbnNavigation { get; set; } = null!;

    public virtual Order? Oder { get; set; }
}
