using bookStore.Data;
using bookStore.Models;
using Microsoft.EntityFrameworkCore;

namespace bookStore.Services.RefreshTokenService
{
    public class RefreshTokenService : IRefreshTokenService
    {
        private readonly DataContext _context;
        public RefreshTokenService(DataContext context)
        {
            _context = context;
        }
        public async Task<List<RefreshToken>> GetRefreshTokenByUserId(string userId)
        {
            var refreshToken = new List<RefreshToken>();
            refreshToken = await _context.RefreshTokens
                                .Where(rt => rt.UserId == userId)
                                .ToListAsync();
            return refreshToken;
        }
    }
}
