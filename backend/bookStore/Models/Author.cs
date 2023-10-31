using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class Author
{
    public string AuthorId { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public bool? IsDelete { get; set; }

    public virtual ICollection<BookAuthor> BookAuthors { get; set; } = new List<BookAuthor>();
}
