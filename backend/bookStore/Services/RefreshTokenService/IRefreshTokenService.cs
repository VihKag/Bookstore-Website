using bookStore.Models;

namespace bookStore.Services.RefreshTokenService
{
    public interface IRefreshTokenService
    {
        Task<List<RefreshToken>> GetRefreshTokenByUserId(string userId);
    }
}
