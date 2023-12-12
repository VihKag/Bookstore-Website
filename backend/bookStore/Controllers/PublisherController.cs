using bookStore.Models.DTOs;
using bookStore.Services.PublisherService;
using Microsoft.AspNetCore.Mvc;
using X.PagedList;

namespace bookStore.Controllers
{
    [Route("api/publisher")]
    [ApiController]
    public class PublisherController : ControllerBase
    {
        private readonly IPublisherService _publisherService;

        public PublisherController(IPublisherService publisherService)
        {
            _publisherService = publisherService;
        }
        public static PagedResult<PagedList<PublisherDTO>> CreatePagedResult(PagedList<PublisherDTO> content, int pageNumber, int pageSize, int totalPages)
        {
            return new PagedResult<PagedList<PublisherDTO>>
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = totalPages,
                Content = content
            };
        }
        [HttpGet("admin")]
        public ActionResult<PagedResult<PagedList<PublisherDTO>>> PaginationPublishers(int pageNumber, int pageSize)
        {
            PagedList<PublisherDTO> pagedPublishers = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedPublishers = _publisherService.PaginationPublisher(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    pagedPublishers = _publisherService.PaginationPublisher(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    pagedPublishers = _publisherService.PaginationPublisher(pageNumber, pageSize = 10);
                    break;
                default:
                    pagedPublishers = _publisherService.PaginationPublisher(pageNumber, pageSize);
                    break;
            }

            if (pagedPublishers == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<PublisherDTO>> pagedResult = CreatePagedResult(pagedPublishers, pageNumber, pageSize, pagedPublishers.PageCount);

            return Ok(pagedResult);
        }
        [HttpGet("client")]
        public ActionResult<PagedResult<PagedList<PublisherDTO>>> PaginationNotDeleted(int pageNumber, int pageSize)
        {
            PagedList<PublisherDTO> pagedPublishers = null;
            switch (pageNumber, pageSize)
            {
                case (0, 0):
                    pagedPublishers = _publisherService.PaginationNotDeleted(pageNumber = 1, pageSize = 10);
                    break;
                case (0, _):
                    pagedPublishers = _publisherService.PaginationNotDeleted(pageNumber = 1, pageSize);
                    break;
                case (_, 0):
                    pagedPublishers = _publisherService.PaginationNotDeleted(pageNumber, pageSize = 10);
                    break;
                default:
                    pagedPublishers = _publisherService.PaginationNotDeleted(pageNumber, pageSize);
                    break;
            }

            if (pagedPublishers == null)
            {
                return BadRequest("Không lấy được danh sách");
            }

            PagedResult<PagedList<PublisherDTO>> pagedResult = CreatePagedResult(pagedPublishers, pageNumber, pageSize, pagedPublishers.PageCount);

            return Ok(pagedResult);
        }
        [HttpGet("list")]
        public ActionResult<List<PublisherDTO>> GetAllNotDeleted()
        {
            var authors = _publisherService.GetAllNotDeleted();
            return Ok(authors);
        }

        [HttpGet("{id}")]
        public ActionResult<PublisherDTO> GetById(string id)
        {
            var author = _publisherService.GetById(id);
            if (author == null)
            {
                return NotFound("Không tìm thấy Publisher!");
            }
            return Ok(author);
        }

        [HttpGet("name/{name}")]
        public ActionResult<List<PublisherDTO>> GetByName(string name)
        {
            var author = _publisherService.GetByName(name);
            if (author == null)
            {
                return NotFound("Không tìm thấy Publisher!");
            }
            return Ok(author);
        }


        [HttpPut("{id}/restore")]
        public ActionResult<PublisherDTO> Restore(string id)
        {
            var author = _publisherService.Restore(id);
            if (author == null)
            {
                return BadRequest("Vui lòng kiểm tra lại ID!");
            }
            return Ok(author);
        }

        [HttpPost]
        public ActionResult<PublisherDTO> Create(PublisherDTO PublisherDTO)
        {
            var author = _publisherService.Create(PublisherDTO);
            if (author == null)
            {
                return BadRequest("Đã tồn tại nhà xuất bản!");
            }
            return Ok(author);
        }

        [HttpPut("{pubID}")]
        public ActionResult<PublisherDTO> Update(PublisherDTO PublisherDTO, string pubID)
        {
            var author = _publisherService.Update(PublisherDTO, pubID);
            if (author == null)
            {
                return BadRequest("Tên nhà xuất bản đã tồn tại hoặc ID không đúng!");
            }
            return Ok(author);
        }

        [HttpDelete("{id}/isDelete")]
        public ActionResult Delete(string id)
        {
            var result = _publisherService.Delete(id);
            if (result == false)
            {
                return NotFound("Không tìm thấy Publisher!");
            }
            return Ok("Thành công!!!");
        }

        [HttpDelete("{id}")]
        public ActionResult PermanentlyDelete(string id)
        {
            var result = _publisherService.PermanentlyDelete(id);
            if (result == false)
            {
                return NotFound("Không tìm thấy Publisher!");
            }
            return Ok("Thành công!!!");
        }

    }
}
