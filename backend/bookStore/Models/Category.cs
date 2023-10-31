using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class Category
{ 
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? Parent { get; set; }

    public string? Description { get; set; }

    public bool? IsDelete { get; set; }

    public virtual ICollection<BookCategory> BookCategories { get; set; } = new List<BookCategory>();

    public virtual ICollection<Category> InverseParentNavigation { get; set; } = new List<Category>();

    public virtual Category? ParentNavigation { get; set; }
}
