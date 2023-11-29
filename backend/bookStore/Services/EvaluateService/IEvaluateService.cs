using bookStore.Models.DTOs;

namespace bookStore.Services.EvaluateService
{
    public interface IEvaluateService
    {
        EvaluateDTO? Create(EvaluateDTO dto);
        bool Delete(string Id);
        List<EvaluateDTO> GetByBook(string Isbn, int pageNumber, int pageSize);
        EvaluateDTO? Update(EvaluateDTO dto);
    }
}
