using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class Book 
{
    public string Isbn { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public double? Price { get; set; }

    public int? Quantity { get; set; }

    public DateTime Date { get; set; }

    public string? PageCount { get; set; }

    public string? Language { get; set; }

    public bool? State { get; set; }

    public bool? IsDelete { get; set; }

    public virtual ICollection<BookAuthor> BookAuthors { get; set; } = new List<BookAuthor>();

    public virtual ICollection<BookCategory> BookCategories { get; set; } = new List<BookCategory>();

    public virtual ICollection<BookPublisher> BookPublishers { get; set; } = new List<BookPublisher>();

    public virtual ICollection<Evaluate> Evaluates { get; set; } = new List<Evaluate>();

    public virtual ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();

    public virtual ICollection<Image> Images { get; set; } = new List<Image>();

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
}
