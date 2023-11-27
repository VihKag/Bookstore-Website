using bookStore.Models.DTOs;
using bookStore.Services.EvaluateService;
using Microsoft.AspNetCore.Mvc;

namespace bookStore.Controllers
{
    [Route("api/evaluate")]
    [ApiController]
    public class EvaluateController : ControllerBase
    {
        private readonly IEvaluateService _evaluateService;

        public EvaluateController(IEvaluateService evaluateService)
        {
            _evaluateService = evaluateService;
        }
        [HttpPost]
        public ActionResult<EvaluateDTO> Create(EvaluateDTO dto)
        {
            var evaluate = _evaluateService.Create(dto);
            if (evaluate == null)
            {
                return Ok("Lỗi khi thêm đánh giá!");
            }
            return Ok(evaluate);
        }
        [HttpDelete]
        public ActionResult<bool> Delete(string id)
        {
            var evaluate = _evaluateService.Delete(id);
            if (evaluate == false)
            {
                return Ok("Lỗi khi xóa đánh giá!");
            }
            return Ok(evaluate);
        }
        [HttpGet]
        public ActionResult<List<EvaluateDTO>> GetByBook(string Ibsn, int pageNumber, int pageSize)
        {
            var evaluate = _evaluateService.GetByBook(Ibsn, pageNumber, pageSize);
            if (evaluate == null)
            {
                return Ok("Sản phẩm không có đánh giá.");
            }
            return Ok(evaluate);
        }
        [HttpPut] 
        public ActionResult<EvaluateDTO> Update(EvaluateDTO dto)
        {
            var evaluate = _evaluateService.Update(dto);
            if (evaluate == null)
            {
                return Ok("Lỗi khi chỉnh sửa đánh giá!");
            }
            return Ok(evaluate);
        }
    }
    
}
