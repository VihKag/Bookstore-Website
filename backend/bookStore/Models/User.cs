using System;
using System.Collections.Generic;

namespace bookStore.Models;

public partial class User
{
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? Email { get; set; }

    public string Phone { get; set; } = null!;

    public bool? Gender { get; set; }

    public DateTime? DateOfBirth { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? Role { get; set; }

    public bool IsActive { get; set; }

    public virtual ICollection<Evaluate> Evaluates { get; set; } = new List<Evaluate>();

    public virtual ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();

    public virtual Role? RoleNavigation { get; set; }

    public User(string username, string name,  string email, string password, string phone)
    {
        Username = username;
        Name = name;
        Email = email;
        Password = password;
        Phone = phone;
    }
}
