using bookStore.Data;
using bookStore.Models.DTOs;
using bookStore.Models;
using bookStore.Reponsitory;
using bookStore.Services.AuthService;
using bookStore.Services.ObjectMapping;
using NanoidDotNet;
using System.Net.Mail;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using X.PagedList;
using System.Text.RegularExpressions;
using bookStore.Repository;

namespace bookStore.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly DataContext _context;
        private readonly IUserRepository _userRepository;
        private readonly MappingService _mappingService;
        private readonly IAuthService _authService;
        
        public UserService(DataContext context, IUserRepository userRepository, MappingService mappingService, IAuthService authService)
        {
            _context = context;
            _userRepository = userRepository;
            _mappingService = mappingService;
            _authService = authService;
            
        }

        public bool Delete(string id)
        {
            if (_userRepository.FindById(id) == null)
            {
                return false;
            }

            TemporarilyDelete(id);

            _userRepository.Save();

            return true;
        }
        public void TemporarilyDelete(string id)
        {
            User user = _userRepository.FindByConditionWithTracking(x => x.Id == id).FirstOrDefault()!;

            user.IsActive = false;
        }
        public List<UserDTO> GetAllUser()
        {
            List<User> entityList = _userRepository.FindAll();
            List<UserDTO> dtoList = new List<UserDTO>();
            foreach (User entity in entityList)
            {
                UserDTO dto = _mappingService.GetMapper().Map<UserDTO>(entity);
                dtoList.Add(dto);

            }
            return dtoList;
        }

        public UserDTO GetByEmail(string email)
        {
            var user_exsit = _userRepository.FindByCondition(u => u.Email == email).FirstOrDefault();
            if (user_exsit != null)
            {
                var userDto = _mappingService.GetMapper().Map<UserDTO>(user_exsit);
                return userDto;
            }
            return null;

        }

        public UserDTO GetByID(string id)
        {
            var user_exsit = _userRepository.FindById(id);
            if (user_exsit != null)
            {
                var userDto = _mappingService.GetMapper().Map<UserDTO>(user_exsit);
                return userDto;
            }
            return null;
        }

        public async Task<AuthResult> Login(LoginDTO dto)
        {
            var user_exsit = _userRepository.FindByCondition(u => u.Username == dto.UserName).FirstOrDefault();
            if (user_exsit != null)
            {
                if (!user_exsit.IsActive)
                {
                    return (new AuthResult
                    {
                        Errors = new List<string>()
                            {
                                "Tài khoản bị vô hiệu hóa!"
                            },
                        Result = false
                    });
                }
                if (!BCrypt.Net.BCrypt.Verify(dto.Password, user_exsit.Password))
                {
                    return (new AuthResult
                    {
                        Errors = new List<string>()
                            {
                                "Thông tin không hợp lệ"
                            },
                        Result = false
                    });
                }
                var token = await _authService.GenerateJWTs(user_exsit);
                var userDto = _mappingService.GetMapper().Map<UserDTO>(user_exsit);
                return (new AuthResult
                {
                    Result = true,
                    Token = token.AccessToken,
                    User = userDto,
                    RefreshToken = token.RefreshToken
                }
                );

            }
            return (new AuthResult
            {
                Errors = new List<string>()
                    {
                        "Thông tin không hợp lệ"
                    },
                Result = false
            });
        }

        public List<UserDTO> PaginationUser(int pageNumber, int pageSize)
        {
            var allUsers = GetAllUser();

            var pagedUsers = allUsers.ToPagedList(pageNumber, pageSize);
            var pagedUsersList = pagedUsers.ToList();
            return pagedUsersList;
        }

        public async Task<AuthResult> Register(UserFormDTO dto)
        {
            if (!IsValidEmail(dto.Email))
            {
                return (new AuthResult
                {
                    Result = false,
                    Errors = new List<string>
                        {
                            "Email không hợp lệ"
                        }
                });
            }

            var user_exsit = _userRepository.FindByCondition(u => u.Email == dto.Email).FirstOrDefault();

            if (user_exsit != null)
            {
                return (new AuthResult
                {
                    Result = false,
                    Errors = new List<string>()
                        {
                            "Email đã tồn tại"
                        }
                });
            }

            if (!IsValidPassword(dto.Password))
            {
                return (new AuthResult
                {
                    Result = false,
                    Errors = new List<string>
                        {
                            "Password không hợp lệ. Phải có ít nhất 8 kí tự và một kí tự đặc biệt."
                        }
                });
            }
            if (!IsValidPhone(dto.Phone))
            {
                return (new AuthResult
                {
                    Result = false,
                    Errors = new List<string>
                        {
                            "Số điện thoại không hợp lệ."
                        }
                });
            }
            string password = BCrypt.Net.BCrypt.HashPassword(dto.Password);
            var new_user = new User(dto.UserName,dto.Name, dto.Email, password, dto.Phone);
            new_user.Id = Nanoid.Generate(size: 20);
            new_user.IsActive = true;
            new_user.Gender = true;
            new_user.Role = "2";
            _userRepository.Create(new_user);
            var token = await _authService.GenerateJWTs(new_user);
            var userDto = _mappingService.GetMapper().Map<UserDTO>(new_user);
            return (new AuthResult
            {
                Result = true,
                Token = token.AccessToken,
                User = userDto,
                RefreshToken = token.RefreshToken
            }
            );

        }

        public UserDTO Update(UserDTO userDTO)
        {
            var user_exsit = _userRepository.FindById(userDTO.Id);
            if (user_exsit != null)
            {
                if (userDTO.Name == null)
                {
                    return null;
                }
                if (!IsValidEmail(userDTO.Email))
                {
                    return null;
                }
                if (user_exsit.Email != userDTO.Email)
                {
                    var user = _userRepository.FindByCondition(u => u.Email == userDTO.Email).FirstOrDefault();
                    if (user != null)
                    {
                        return null;
                    }
                }
                if (!IsValidPhone(userDTO.Phone))
                {
                    return null;
                }

                user_exsit.Email = userDTO.Email;
                user_exsit.Name = userDTO.Name;
                user_exsit.Phone = userDTO.Phone;
                user_exsit.Gender= userDTO.Gender;
                user_exsit.DateOfBirth = userDTO.DateOfBirth;
                _userRepository.Update(user_exsit);
                _userRepository.Save();
                var dto = _mappingService.GetMapper().Map<UserDTO>(user_exsit);
                return dto;
            }

            return null;
        }

        private bool IsValidEmail(string email)
        {
            var valid = true;

            try
            {
                var emailAddress = new MailAddress(email);
            }
            catch
            {
                valid = false;
            }

            return valid;
        }
        private bool IsValidPassword(string password)
        {
            if (password.Length < 8)
            {
                return false;
            }
            if (string.IsNullOrEmpty(password))
            {
                return false;
            }
            if (!password.Any(c => !char.IsLetterOrDigit(c)))
            {
                return false;
            }

            return true;
        }
        private bool IsValidPhone(string phone)
        {   
            if(phone == null) { return false; }
            if (phone != null)
            {
                string pattern = @"^-*[0-9,\.?\-?\(?\)?\ ]+$";
                return Regex.IsMatch(phone, pattern);
            }
            if (phone.Length != 10 )
            {
                return false;
            }
            if (string.IsNullOrEmpty(phone))
            {
                return false;
            }
            
            return true;

        }

        public bool UpdatePassword(string password, string userId)
        {
            var user = _userRepository.FindById(userId);
            if (user != null)
            {
                user.Password = password;
                _userRepository.Update(user);
                _userRepository.Save();
                return true;
            }
            return false;
        }
    }
}
