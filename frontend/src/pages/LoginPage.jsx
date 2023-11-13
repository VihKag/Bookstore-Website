import * as React from "react";
import PasswordApp from "../components/Other/PasswordApp";
import { Link } from "react-router-dom";
import googleIcon from "../assets/image/ic_gg.jpg";
import facebookIcon from "../assets/image/ic_fb.png";
import { login } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const usenavigate = useNavigate();
    const handleSubmit = async (prop) =>{
      prop.preventDefault();
      const username = prop.target.username.value;
      const password = prop.target.password.value;
      console.log("Username:", username);
      console.log("Password:", password);   
      const success = await login({ username, password });
      if (success) {
          usenavigate('/');
      }else{
        usenavigate('/login');
      }
    }
  return (
    <form onSubmit={handleSubmit} id="form-login">
      <div
        className="bg-white px-8 py-8 mt-[-10px] rounded-3xl border-2 border-gray"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.05), 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 0px 2px rgba(0, 0, 0, 0.05), -1px 0px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h1 className="text-3xl font-semibold text-center mb-4">Đăng Nhập</h1>
        <p className="font-medium text-lg text-gray-500 mt-2 mb-4 ">
          Xin chào! Mời bạn đăng nhập tài khoản
        </p>
        <div className="mt-2">
          <div>
            <label className="text-md font-medium">Tài khoản</label>
            <input
              type="text"
              name="username"
              className="text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Nhập tên người dùng"
            />
          </div>
          <div className="mt-2">
            <label className="text-md font-medium">Mật khẩu</label>
            <PasswordApp />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" htmlFor="remember">
                Ghi nhớ mật khẩu
              </label>
            </div>
            <button className="font-medium text-base text-[#0dd3b7] hover:underline hover:scale-[1.03]">
              Quên mật khẩu?
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-y-4">
            <button type="submit" className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-2 rounded-xl bg-[#0dd3b7] text-white text-lg font-bold">
              Đăng nhập
            </button>
            <button className="text-md flex justify-center items-center rounded-xl py-2 border-2 border-gray-100 gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all text-lg font-semibold">
              <img src={googleIcon} alt="Google Icon" className="w-8 h-8 mr-1" />
              Đăng nhập với Google
            </button>

            <button className="text-md flex justify-center rounded-xl py-2 border-2 border-gray-100 items-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all text-lg font-semibold">
              <img src={facebookIcon} alt="Facebook Icon" className="w-8 h-8 mr-1" />
              Đăng nhập với Facebook
            </button>

          </div>
          <div className="mt-6 flex justify-center items-center">
            <p className="font-medium text-base">Bạn chưa có tài khoản? </p>
            <Link to="/signup" className="text-[#0dd3b7] hover:underline hover:scale-[1.03] ml-1.5">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </form> 
  );
};

export default LoginPage;
