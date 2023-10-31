using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class Order 
{
    public string Id { get; set; } = null!;

    public string? UserId { get; set; }

    public int? Total { get; set; }

    public DateTime? OrderDay { get; set; }

    public bool? Status { get; set; }

    public string Address { get; set; } = null!;

    public bool? IsDelete { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual User? User { get; set; }
}
