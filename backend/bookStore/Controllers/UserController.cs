
using bookStore.Models.DTOs;
using bookStore.Models;
using bookStore.Services.RefreshTokenService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using bookStore.Services.UserService;

namespace bookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IRefreshTokenService _refreshTokenService;
        public UserController(IUserService userService, IRefreshTokenService refreshTokenService)
        {
            _userService = userService;
            _refreshTokenService = refreshTokenService;
        }

//        [Authorize(Roles = "Admin")]
        [HttpGet]
        public ActionResult<List<UserDTO>> PaginationUser(int pageNumber, int pageSize)
        {
            var pagedUsers = _userService.PaginationUser(pageNumber, pageSize);
            return Ok(pagedUsers);
        }
        [HttpGet("{id}")]
//        [Authorize(Roles = "User")]
        public ActionResult GetByID(string id)
        {
            var userID = User.Claims.FirstOrDefault(x => x.Type == "Id")!.Value;
            if (userID != id)
            {
                return Unauthorized("Error!");
            }
            var user = _userService.GetByID(id);
            return Ok(user);
        }
        [HttpPost("update")]
//        [Authorize(Roles = "User")]
        public ActionResult UpdateProfile(UserDTO userDTO)
        {
            var userID = User.Claims.FirstOrDefault(x => x.Type == "Id")!.Value;
            if (userID != userDTO.Id)
            {
                return Unauthorized("Error!");
            }
            var user = _userService.Update(userDTO);
            if (user == null)
            {
                return BadRequest("Error!");
            }
            return Ok(user);
        }


    }
}
