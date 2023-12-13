using bookStore.Models.DTOs;
using bookStore.Models;
using X.PagedList;

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
        PagedList<UserDTO> PaginationUser(int pageNumber, int pageSize);
        PagedList<UserDTO> PaginationAdmin(int pageNumber, int pageSize);
        bool UpdatePassword(string password, string userId);
    }
}
