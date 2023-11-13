import * as React from "react";
import PasswordApp from "../components/Other/PasswordApp";
import PasswordConfirm from "../components/Other/PasswordConfirm";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/AuthApi";
export default function SignupPage() {
  const usenavigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.username.value,
      name: e.target.name.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      confirm: e.target.confirm.value,
    };

    const success = await signup({username: formData.username, name: formData.name, password: formData.password, phone: formData.phone, confirm: formData.confirm});
    if (success) {
      usenavigate('/');
    } else {
      console.log('Signup failed');
    }
  };
  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)} id="form-signup">
      <div
        className="bg-white px-8 py-4 mt-[-10px] rounded-3xl border-2 border-gray"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.05), 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 0px 2px rgba(0, 0, 0, 0.05), -1px 0px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h1 className="text-2xl font-semibold text-center ">Đăng Ký</h1>
        <div className="mt-2">
          <div>
            <label className="text-sm font-medium">Tên đăng nhập</label>
            <input
              type="text"
              name="username"
              className="text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Nhập tên đăng nhập"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Tên người dùng</label>
            <input
              type="text"
              name="name"
              className=" text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Nhập tên người dùng"
            />
          </div>
          <div>
            <label className="text-smfont-medium" >Số điện thoại</label>
            <input
              type="text"
              name="phone"
              className="text-sm w-full border-2 border-gray-100 rounded-xl  py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Nhập email"
            />
          </div>
          <div className="mt-2">
            <label className="text-sm font-medium">Mật khẩu</label>
            <PasswordApp />
          </div>
          <div className="mt-2">
            <label className="text-sm font-medium">Xác nhận mật khẩu</label>
            <PasswordConfirm />
          </div>
          <div className=" text-sm mt-4 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" for="remember">
                Tôi đồng ý với các điều khoản
              </label>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-2 rounded-xl bg-[#0dd3b7]
            text-white text-lg font-bold"
            >
              Xác nhận
            </button>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <p className="font-medium text-base">Bạn đã có tài khoản? </p>
            <Link to="/login" className="text-sm text-[#0dd3b7] hover:underline hover:scale-[1.03] ml-1.5">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </form>
    </>

  );
}
