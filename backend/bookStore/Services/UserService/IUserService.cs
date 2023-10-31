using bookStore.Models.DTOs;
using bookStore.Models;

namespace bookStore.Services.UserService
{
    public interface IUserService
    {
        Task<List<User>> GetAllUser();
        UserDTO GetByID(string id);
        UserDTO GetByEmail(string email);
        void Delete(string id);
        UserDTO Update(UserDTO userDTO);
        Task<AuthResult> Register(UserFormDTO dto);
        Task<AuthResult> Login(UserFormDTO dto);
    }
}
