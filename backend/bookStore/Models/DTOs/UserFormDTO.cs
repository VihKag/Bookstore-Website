using Microsoft.AspNetCore.Identity;
using Microsoft.Build.Framework;
using Newtonsoft.Json;

namespace bookStore.Models.DTOs
{
    public class UserFormDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Phone { get; set; }
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
