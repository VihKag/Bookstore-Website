using AutoMapper;

namespace bookStore.Services.ObjectMapping
{
    public class MappingService
    {
        private readonly IMapper _mapper;

        public MappingService()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            _mapper = config.CreateMapper();
        }

        public IMapper GetMapper() => _mapper;
    }
}
