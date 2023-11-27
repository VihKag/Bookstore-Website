using bookStore.Models.DTOs;
using bookStore.Services.CategoryService;
using bookStore.Services.FavoriteService;
using Microsoft.AspNetCore.Mvc;

namespace bookStore.Controllers
{
    [Route("api/favorite")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        private readonly IFavoriteService _favoriteService ;

        public FavoriteController(IFavoriteService favoriteService)
        {
            _favoriteService = favoriteService;
        }
        [HttpPost]
        public ActionResult<FavoriteDTO> Create(FavoriteDTO dto)
        {
            var favorite = _favoriteService.Create(dto);
            if (favorite == null)
            {
                return Ok("Lỗi khi thêm sản phẩm vào danh mục yêu thích!");
            }
            return Ok(favorite);
        }
        [HttpDelete]
        public ActionResult<bool> Delete(string id)
        {
            var favorite = _favoriteService.Delete(id);
            if (favorite == false)
            {
                return Ok("Lỗi khi xóa sản phẩm khỏi danh sách yêu thích!");
            }
            return Ok(favorite);
        }
        [HttpGet]
        public ActionResult<List<FavoriteDTO>> GetByUser(string UserId, int pageNumber, int pageSize)
        {
            var favorite = _favoriteService.GetByUser(UserId, pageNumber, pageSize);
            if (favorite == null)
            {
                return Ok("Không có sản phẩm yêu thích trong danh sách.");
            }
            return Ok(favorite);
        }
    }
}
