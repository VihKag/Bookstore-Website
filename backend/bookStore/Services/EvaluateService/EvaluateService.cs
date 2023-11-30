using bookStore.Models;
using bookStore.Models.DTOs;
using bookStore.Reponsitory;
using bookStore.Repository;
using bookStore.Services.ObjectMapping;
using NanoidDotNet;
using X.PagedList;

namespace bookStore.Services.EvaluateService
{
    public class EvaluateService : IEvaluateService
    {
        private readonly MappingService _mappingService;
        private readonly IEvaluateRepository _evaluateRepository;

        public EvaluateService(MappingService mappingService, IEvaluateRepository evaluateRepository)
        {
            _mappingService = mappingService;
            _evaluateRepository = evaluateRepository;
        }
        public EvaluateDTO? Create(EvaluateDTO dto)
        {
            dto.Id = Nanoid.Generate(size: 10);
            Evaluate evaluate = _mappingService.GetMapper().Map<Evaluate>(dto);

            _evaluateRepository.Create(evaluate);
            _evaluateRepository.Save();

            return dto;
        }

        public bool Delete(string Id)
        {
            Evaluate evaluate = _evaluateRepository.FindByID(Id);
            if (evaluate == null)
            {
                return false;
            }
            _evaluateRepository.Delete(evaluate);
            _evaluateRepository.Save();

            return true;
        }

        public List<EvaluateDTO> GetByBook(string Isbn, int pageNumber, int pageSize)
        {
            List<Evaluate> entityList = _evaluateRepository.FindByCondition(x => x.Isbn == Isbn);
            List<EvaluateDTO> dtoList = new List<EvaluateDTO>();
            foreach (Evaluate entity in entityList)
            {
                EvaluateDTO dto = _mappingService.GetMapper().Map<EvaluateDTO>(entity);
                dtoList.Add(dto);

            }
            var pagedEvaluates = dtoList.ToPagedList(pageNumber, pageSize);
            var pagedEvaluatesList = pagedEvaluates.ToList();
            return pagedEvaluatesList;
        }

        public EvaluateDTO? Update(EvaluateDTO dto)
        {
            Evaluate evaluate = _evaluateRepository.FindByID(dto.Isbn);
            if (evaluate == null)
            { 
                return null; 
            }
            evaluate.Isbn = dto.Isbn;
            evaluate.UserId= dto.UserId;
            evaluate.Comment = dto.Comment;
            evaluate.Vote= dto.Vote;

            _evaluateRepository.Update(evaluate);
            _evaluateRepository.Save();
            return dto;
        }
    }
}
