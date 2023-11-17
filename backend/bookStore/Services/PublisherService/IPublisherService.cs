using bookStore.Models.DTOs;

namespace bookStore.Services.PublisherService
{
    public interface IPublisherService
    {
        PublisherDTO? Create(PublisherDTO dto);
        bool Delete(string id);
        List<PublisherDTO> GetAll();
        List<PublisherDTO> GetAllDeleted();
        PublisherDTO? GetById(string id);
        PublisherDTO? GetByName(string name);
        bool PermanentlyDelete(string id);
        PublisherDTO? Restore(string id);
        PublisherDTO? Update(PublisherDTO dto);
        List<PublisherDTO> PaginationPublisher(int pageNumber, int pageSize);
    }
}
