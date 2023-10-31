using AutoMapper;
using Azure;
using bookStore.Models.DTOs;
using bookStore.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace bookStore.Services.ObjectMapping
{
    internal class MappingProfile : Profile
    {
        public MappingProfile()
        {
            
          //  CreateMap<Category, CategoryDTO>();
           // CreateMap<CategoryDTO, Category>();
           
            CreateMap<RefreshToken, RefreshTokenDTO>();

            CreateMap<User, UserDTO>();

            CreateMap<UserDTO, User>();

            //...Trong quá trình làm phát sinh thêm nhiều map thì bổ sung dần vào đây 

        }
    }
}
