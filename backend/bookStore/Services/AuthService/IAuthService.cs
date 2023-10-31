using bookStore.Models.DTOs;
using bookStore.Models;

namespace bookStore.Services.AuthService
{
    public interface IAuthService
    {
        Task<TokenDTO> GenerateJWTs(User user);
        Task<AuthResult> RefreshToken(RefreshToken refreshToken);
        Task<AuthResult> RefreshToken(string refreshToken);

        Task<AuthResult> RevokeRefreshToken(string rerefreshToken);
        Task DeleteRefreshTokenBranch(string refreshToken);

    }
}
