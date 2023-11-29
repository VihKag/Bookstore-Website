using bookStore.Models.DTOs;

namespace bookStore.Services.FavoriteService
{
    public interface IFavoriteService
    {
        FavoriteDTO? Create(FavoriteDTO dto);
        bool Delete(string Id);
        List<FavoriteDTO> GetByUser(string UserId, int pageNumber, int pageSize);
    }
}
