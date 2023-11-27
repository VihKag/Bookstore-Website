using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Reponsitory;
using bookStore.Repository;
using bookStore.Repository.Implement;
using bookStore.Services.ObjectMapping;
using NanoidDotNet;
using System.Drawing.Printing;
using X.PagedList;

namespace bookStore.Services.FavoriteService
{
    public class FavoriteService : IFavoriteService
    {
        private readonly MappingService _mappingService;
        private readonly IFavoriteRepository _favoriteRepository;

        public FavoriteService(MappingService mappingService, IFavoriteRepository favoriteRepository)
        {
            _mappingService = mappingService;
            _favoriteRepository = favoriteRepository;
        }
        public FavoriteDTO? Create(FavoriteDTO dto)
        {
            dto.Id = Nanoid.Generate(size: 10);
            Favorite favorite = _mappingService.GetMapper().Map<Favorite>(dto);

            _favoriteRepository.Create(favorite);
            _favoriteRepository.Save();

            return dto;
        }

        public bool Delete(string Id)
        {
            Favorite favorite = _favoriteRepository.FindByID(Id);
            if (favorite == null)
            {
                return false;
            }
            _favoriteRepository.Delete(favorite);
            _favoriteRepository.Save();

            return true;
        }

        public List<FavoriteDTO> GetByUser(string UserId, int pageNumber, int pageSize)
        {
            List<Favorite> entityList = _favoriteRepository.FindByCondition(x => x.UserId == UserId);
            List<FavoriteDTO> dtoList = new List<FavoriteDTO>();
            foreach (Favorite entity in entityList)
            {
                FavoriteDTO dto = _mappingService.GetMapper().Map<FavoriteDTO>(entity);
                dtoList.Add(dto);

            }
            var pagedFavorites = dtoList.ToPagedList(pageNumber, pageSize);
            var pagedFavoritesList = pagedFavorites.ToList();
            return pagedFavoritesList;
        }
    }
}
