
using bookStore.Models.DTOs;
using bookStore.Models;
using bookStore.Services.RefreshTokenService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using bookStore.Services.UserService;
using X.PagedList;

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

        public static PagedResult<PagedList<UserDTO>> CreatePagedResult(PagedList<UserDTO> content, int pageNumber, int pageSize, int totalPages)
        {
            return new PagedResult<PagedList<UserDTO>>
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = totalPages,
                Content = content
            };
        }
        //        [Authorize(Roles = "Admin")]
        [HttpGet("allUser")]
        public ActionResult<PagedResult<PagedList<UserDTO>>> PaginationUser(int pageNumber, int pageSize)
        {

            PagedList<UserDTO> pagedUsers = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedUsers = _userService.PaginationUser(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    pagedUsers = _userService.PaginationUser(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    pagedUsers = _userService.PaginationUser(pageNumber, pageSize = 10);
                    break;
                default:
                    pagedUsers = _userService.PaginationUser(pageNumber, pageSize);
                    break;
            }

            if (pagedUsers == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<UserDTO>> pagedResult = CreatePagedResult(pagedUsers, pageNumber, pageSize, pagedUsers.PageCount);

            return Ok(pagedResult);
        }

        [HttpGet("allAdmin")]
        public ActionResult<PagedResult<PagedList<UserDTO>>> PaginationAdmin(int pageNumber, int pageSize)
        {

            PagedList<UserDTO> pagedUsers = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedUsers = _userService.PaginationAdmin(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    pagedUsers = _userService.PaginationAdmin(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    pagedUsers = _userService.PaginationAdmin(pageNumber, pageSize = 10);
                    break;
                default:
                    pagedUsers = _userService.PaginationAdmin(pageNumber, pageSize);
                    break;
            }

            if (pagedUsers == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<UserDTO>> pagedResult = CreatePagedResult(pagedUsers, pageNumber, pageSize, pagedUsers.PageCount);

            return Ok(pagedResult);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var result = _userService.Delete(id);
            if (result == false)
            {
                return NotFound("Không tìm thấy User!");
            }
            return Ok("Thành công!!!");
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
        [HttpPut("updateprofile/{id}")]
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

        [HttpPut("updatepass/{id}")]
        public ActionResult UpdatePassword(string password, string userId)
        {
            var update = _userService.UpdatePassword(password, userId);
            if (update == false)
            {
                return BadRequest("Cập nhật mật khẩu không thành công!");
            }
            return Ok("Đã cập nhật mật khẩu!");
        }


    }
}
