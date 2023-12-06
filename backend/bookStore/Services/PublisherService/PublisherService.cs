using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Reponsitory;
using bookStore.Repository;
using bookStore.Repository.Implement;
using bookStore.Services.ObjectMapping;
using X.PagedList;

namespace bookStore.Services.PublisherService
{
    public class PublisherService : IPublisherService
    {
        private readonly MappingService _mappingService;
        private readonly IPublisherRepository _publisherRepository;

        public PublisherService(MappingService mappingService, IPublisherRepository publisherRepository)
        {
            _mappingService = mappingService;
            _publisherRepository = publisherRepository;
        }
        public PublisherDTO? Create(PublisherDTO dto)
        {
            //dto.Id = Nanoid.Generate(size: 10);
            Publisher publisher = _mappingService.GetMapper().Map<Publisher>(dto);
            publisher.IsDelete = false;


            _publisherRepository.Create(publisher);
            _publisherRepository.Save();

            return dto;
        }

        public bool Delete(string id)
        {
            if (_publisherRepository.FindByID(id) == null)
            {
                return false;
            }
            TemporarilyDelete(id);

            _publisherRepository.Save();

            return true;
        }

        public void TemporarilyDelete(string id)
        {
            Publisher Publisher = _publisherRepository.FindByConditionWithTracking(x => x.Id == id, x => x.BookPublishers).FirstOrDefault()!;

            Publisher.IsDelete = true;
        }

        public List<PublisherDTO> GetAll()
        {
            List<Publisher> entityList = _publisherRepository.FindAll();
            List<PublisherDTO> dtoList = new List<PublisherDTO>();
            foreach (Publisher entity in entityList)
            {
                PublisherDTO dto = _mappingService.GetMapper().Map<PublisherDTO>(entity);
                dtoList.Add(dto);

            }
            return dtoList;
        }

        public List<PublisherDTO> GetAllDeleted()
        {
            List<Publisher> entityList = _publisherRepository.FindByCondition(x => x.IsDelete == true);
            List<PublisherDTO> dtoList = new List<PublisherDTO>();
            foreach (Publisher entity in entityList)
            {
                PublisherDTO dto = _mappingService.GetMapper().Map<PublisherDTO>(entity);
                dtoList.Add(dto);
            }

            return dtoList;
        }

        public PublisherDTO? GetById(string id)
        {
            Publisher entity = _publisherRepository.FindByID(id);
            if (entity == null)
            {
                return null;
            }

            PublisherDTO dto = _mappingService.GetMapper().Map<PublisherDTO>(entity);

            return dto;
        }

        public PublisherDTO? GetByName(string name)
        {
            Publisher entity = _publisherRepository.FindByName(name);
            if (entity == null)
            {
                return null;
            }

            PublisherDTO dto = _mappingService.GetMapper().Map<PublisherDTO>(entity);

            return dto;
        }

        public bool PermanentlyDelete(string id)
        {
            if (_publisherRepository.FindByConditionWithTracking(x => x.Id == id && x.IsDelete == true).FirstOrDefault()! == null)
            {
                return false;
            }

            Publisher Publisher = _publisherRepository.FindByConditionWithTracking(x => x.Id == id, x => x.BookPublishers).FirstOrDefault()!;

            _publisherRepository.Delete(Publisher);
            _publisherRepository.Save();

            return true;
        }

        public PublisherDTO? Restore(string id)
        {
            Publisher entity = _publisherRepository.FindByConditionWithTracking(x => x.Id == id && x.IsDelete == true).FirstOrDefault()!;
            if (entity == null)
            {
                return null;
            }
            if (entity.IsDelete == false)
            {
                return null;
            }

            entity.IsDelete = false;

            _publisherRepository.Update(entity);
            _publisherRepository.Save();

            PublisherDTO dto = _mappingService.GetMapper().Map<PublisherDTO>(entity);

            return dto;
        }

        public PublisherDTO? Update(PublisherDTO dto, string pubID)
        {
            if (dto.Id == null)
            {
                return null;
            }

            Publisher entity = _publisherRepository.FindByID(dto.Id);
            if (entity == null)
            {
                return null;
            }

            entity.Id = dto.Id;
            entity.Name = dto.Name;
            entity.Description = dto.Description;

            _publisherRepository.Update(entity);
            _publisherRepository.Save();

            return dto;
        }

        public List<PublisherDTO> PaginationPublisher(int pageNumber, int pageSize)
        {
            var allPublishers = GetAll();

            var pagedPublishers = allPublishers.ToPagedList(pageNumber, pageSize);
            var pagedPublishersList = pagedPublishers.ToList();
            return pagedPublishersList;
        }

        public List<PublisherDTO> GetAllNotDeleted()
        {
            List<Publisher> entityList = _publisherRepository.FindByCondition(x => x.IsDelete == false);
            List<PublisherDTO> dtoList = new List<PublisherDTO>();
            foreach (Publisher entity in entityList)
            {
                PublisherDTO dto = _mappingService.GetMapper().Map<PublisherDTO>(entity);
                dtoList.Add(dto);
            }

            return dtoList;
        }

        public List<PublisherDTO> PaginationNotDeleted(int pageNumber, int pageSize)
        {
            var allnotdeleted = GetAllNotDeleted();
            var pagedPublishers = allnotdeleted.ToPagedList(pageNumber, pageSize);
            var pagedPublishersList = pagedPublishers.ToList();
            return pagedPublishersList;
        }
    }
}
