using bookStore.Models.DTOs;
using bookStore.Models;

namespace bookStore.Services.UserService
{
    public interface IUserService
    {
        List<UserDTO> GetAllUser();
        UserDTO GetByID(string id);
        UserDTO GetByEmail(string email);
        bool Delete(string id);
        UserDTO Update(UserDTO userDTO);
        Task<AuthResult> Register(UserFormDTO dto);
        Task<AuthResult> Login(LoginDTO dto);
        List<UserDTO> PaginationUser(int pageNumber, int pageSize);
        bool UpdatePassword(string password, string userId);
    }
}
