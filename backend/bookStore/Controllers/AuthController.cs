using bookStore.Models.DTOs;
using bookStore.Services.AuthService;
using bookStore.Services.UserService;
using Microsoft.AspNetCore.Mvc;

namespace bookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IAuthService _authService;

        public AuthController(IUserService userService, IAuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register([FromBody] UserFormDTO userDTO)
        {
            var Authresult = await _userService.Register(userDTO);
            if (Authresult.Result == false)
            {
                return BadRequest(Authresult);
            }
            SetRefreshTokenOnCookie(Authresult.RefreshToken.Token);
            return Ok(Authresult);
        }
        [HttpPost("Refresh-Token")]
        public async Task<ActionResult> RefreshToken()
        {
            var refreshToken = Request.Cookies["refreshToken"];

            var authResult = await _authService.RefreshToken(refreshToken);
            if (!authResult.Result)
            {
                return Unauthorized(authResult);
            }

            SetRefreshTokenOnCookie(authResult.RefreshToken.Token);
            return Ok(authResult);
        }
        [HttpPost("Login")]
        public async Task<ActionResult> Login([FromBody] UserFormDTO userDTO)
        {
            var Authresult = await _userService.Login(userDTO);
            if (Authresult.Result == false)
            {
                return BadRequest(Authresult);
            }
            SetRefreshTokenOnCookie(Authresult.RefreshToken.Token);
            return Ok(Authresult);
        }

        [HttpPost("Logout")]
        public async Task<ActionResult> Logout()
        {
            var refreshToken = Request.Cookies["refreshToken"];

            await _authService.DeleteRefreshTokenBranch(refreshToken);
            HttpContext.Response.Cookies.Delete("refreshToken");
            return Ok();
        }

        private void SetRefreshTokenOnCookie(string refreshToken)
        {
            HttpContext.Response.Cookies.Append("refreshToken",
                        refreshToken,
                        new CookieOptions
                        {
                            Expires = DateTimeOffset.UtcNow.AddDays(7),
                            HttpOnly = true,
                            IsEssential = true,
                        });
        }
    }
}
