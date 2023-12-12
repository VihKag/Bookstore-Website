using bookStore.Models.DTOs;
using X.PagedList;

namespace bookStore.Services.PublisherService
{
    public interface IPublisherService
    {
        PublisherDTO? Create(PublisherDTO dto);
        bool Delete(string id);
        List<PublisherDTO> GetAll();
        List<PublisherDTO> GetAllNotDeleted();
        PagedList<PublisherDTO> PaginationNotDeleted(int pageNumber, int pageSize);
        PublisherDTO? GetById(string id);
        PublisherDTO? GetByName(string name);
        bool PermanentlyDelete(string id);
        PublisherDTO? Restore(string id);
        PublisherDTO? Update(PublisherDTO dto, string pubID);
        PagedList<PublisherDTO> PaginationPublisher(int pageNumber, int pageSize);
    }
}
