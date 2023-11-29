using bookStore.Models.DTOs;
using bookStore.Services.ObjectMapping;
using bookStore.Services.RefreshTokenService;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using bookStore.Data;
using bookStore.Models;

namespace bookStore.Services.AuthService
{
    public class AuthService : IAuthService
    {
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;
        private readonly IRefreshTokenService _refreshTokenService;
        private readonly MappingService _mappingService;

        public AuthService(IConfiguration configuration, IRefreshTokenService refreshTokenService, DataContext context, MappingService mappingService)
        {
            _configuration = configuration;
            _refreshTokenService = refreshTokenService;
            _context = context;
            _mappingService = mappingService;
        }

        public async Task<TokenDTO> GenerateJWTs(User user)
        {
            var jwtHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration.GetSection("JwtConfig:SecretKey").Value);

            var authClaims = new ClaimsIdentity(new[]
                {
                    new Claim("Id", user.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Name, user.Username),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Sub, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToUniversalTime().ToString())
                });
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(authClaims),
                Expires = DateTime.Now.AddMinutes(15),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256),
            };

            var token = jwtHandler.CreateToken(tokenDescriptor);
            var accessToken = jwtHandler.WriteToken(token);
            var refreshToken = GenerateRefreshJWT();

            var rToken = new RefreshToken
            {
                
                Token = refreshToken,
                UserId = user.Id,

                IsUsed = false,
                IsRevoked = false,
                CreateAt = DateTime.UtcNow,
                ExpireAt = DateTime.UtcNow.AddDays(7),
            };
            await _context.RefreshTokens.AddAsync(rToken);
            await _context.SaveChangesAsync();


            return new TokenDTO
            {
                AccessToken = accessToken,
                RefreshToken = rToken,
            };
        }

        private string GenerateRefreshJWT()
        {
            var random = new Byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(random);
                return Convert.ToBase64String(random);
            }
        }
        public async Task<AuthResult> RefreshToken(string refreshToken)
        {
            // 4. Kiểm tra refresh token tồn tại trong database
            var storedToken = _context.RefreshTokens.FirstOrDefault(x => x.Token == refreshToken);
            if (storedToken == null)
            {
                return new AuthResult
                {
                    Errors = new List<string>()
                                {
                                    "Không có quyền truy cập 1"
                                },
                    Result = false,
                };
            }
            // 5. kiểm tra refresh token đã được sử dụng hay thu hồi chưa\
            if ((storedToken.IsUsed==true)|| (storedToken.IsRevoked == true))
            {
                await DeleteRefreshTokenBranch(storedToken.Token);
                return new AuthResult
                {
                    Errors = new List<string>()
                                {
                                    "Không có quyền truy cập 2"
                                },
                    Result = false,
                };
            }
            

            if (storedToken.ExpireAt < DateTime.UtcNow)
            {
                await DeleteRefreshTokenBranch(storedToken.Token);
                return new AuthResult
                {
                    Errors = new List<string>()
                                {
                                    "Không có quyền truy cập 3"
                                },
                    Result = false,
                };
            }
            storedToken.IsRevoked = true;
            storedToken.IsUsed = true;
            _context.RefreshTokens.Update(storedToken);
            await _context.SaveChangesAsync();

            var user = await _context.Users.FirstOrDefaultAsync(user => user.Id == storedToken.UserId);
            var token = await GenerateJWTs(user);
            if (storedToken.ParentId == null)
            {
                token.RefreshToken.ParentId = storedToken.Token;
            }
            else
            {
                token.RefreshToken.ParentId = storedToken.ParentId;
            }

            _context.RefreshTokens.Update(token.RefreshToken);
            await _context.SaveChangesAsync();
            var userDto = _mappingService.GetMapper().Map<UserDTO>(user);
            return new AuthResult
            {
                Token = token.AccessToken,
                User = userDto,
                Result = true,
                RefreshToken = token.RefreshToken,

            };
        }
        public async Task<AuthResult> RefreshToken(RefreshToken refreshToken)
        {
            throw new NotImplementedException();
        }

        public async Task<AuthResult> RevokeRefreshToken(string refreshToken)
        {
            var storedToken = _context.RefreshTokens.FirstOrDefault(x => x.Token == refreshToken);
            if (storedToken == null)
            {
                return new AuthResult
                {
                    Result = false,
                };
            }
            storedToken.IsRevoked = true;
            _context.RefreshTokens.Update(storedToken);
            await _context.SaveChangesAsync();
            return new AuthResult
            {
                Result = true,
            };
        }
        private async Task DeleteRefreshToken(string refreshToken)
        {
            var storedToken = _context.RefreshTokens.FirstOrDefault(x => x.Token == refreshToken);

            List<RefreshToken> rfList = await _context.RefreshTokens.Where(x => x.UserId == storedToken.UserId).ToListAsync();
            List<RefreshToken> deteleList = new List<RefreshToken>();

            foreach (var tk in rfList)
            {
                if (tk.Token == refreshToken || tk.ParentId == refreshToken)
                {
                    deteleList.Add(tk);
                }
            }
            foreach (RefreshToken rf in deteleList)
            {
                _context.RefreshTokens.Remove(rf);
            }
            await _context.SaveChangesAsync();
        }
        public async Task DeleteRefreshTokenBranch(string refreshToken)
        {
            var storedToken = _context.RefreshTokens.FirstOrDefault(x => x.Token == refreshToken);
            if (storedToken != null)
            {
                if (storedToken.ParentId == null)
                {
                    await DeleteRefreshToken(storedToken.Token);
                }
                else
                {
                    await DeleteRefreshToken(storedToken.ParentId);
                }
            }
        }
    }
}
