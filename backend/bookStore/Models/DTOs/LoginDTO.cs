using Microsoft.AspNetCore.Identity;
using Microsoft.Build.Framework;
using Newtonsoft.Json;

namespace bookStore.Models.DTOs
{
    public class LoginDTO

    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
