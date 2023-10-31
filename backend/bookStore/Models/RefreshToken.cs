using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class RefreshToken
{
    public string Token { get; set; } = null!;

    public string? UserId { get; set; }

    public string? ParentId { get; set; }

    public DateTime? CreateAt { get; set; }

    public DateTime? ExpireAt { get; set; }

    public bool? IsUsed { get; set; }

    public bool? IsRevoked { get; set; }

    public virtual User? User { get; set; }
}
