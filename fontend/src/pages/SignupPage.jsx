import * as React from "react";
import PasswordApp from "../components/Other/PasswordApp";
import PasswordConfirm from "../components/Other/PasswordConfirm";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div
      className="bg-white px-14 py-16 mt-[-10px] rounded-3xl border-2 border-gray"
      style={{
        boxShadow:
          "0px 1px 2px rgba(0, 0, 0, 0.05), 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 0px 2px rgba(0, 0, 0, 0.05), -1px 0px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h1 className="text-5xl font-semibold text-center mb-4">Đăng Ký</h1>
      <p className=" text-center font-medium text-xl text-gray-500 mt-2 mb-4">
        Xin chào! Mời bạn đăng ký tài khoản
      </p>
      <div className="mt-2">
        <div>
          <label className="text-lg font-medium">Tài khoản</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl py-4 px-6 mt-1 mb-1 bg-transparent"
            placeholder="Nhập tên người dùng"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Số điện thoại</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 mb-1 bg-transparent"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div classname="mt-2">
          <label className="text-lg font-medium">Mật khẩu</label>
          {/* <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Nhập mật khẩu"
            type="password"
          /> */}
          <PasswordApp />
        </div>
        <div classname="mt-2">
          <label className="text-lg font-medium">Xác nhận mật khẩu</label>
          {/* <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Nhập lại mật khẩu"
            type="password"
          /> */}
          <PasswordConfirm />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" for="remember">
              Tôi đồng ý với các điều khoản
            </label>
          </div>
          {/* <button className="font-medium text-base text-violet-500 hover:underline hover:scale-[1.03]">
            Quên mật khẩu?
          </button> */}
        </div>
        <div className="mt-6 flex flex-col gap-y-4">
          <button
            className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-2 rounded-xl bg-[#0dd3b7]
           text-white text-lg font-bold"
          >
            Xác nhận
          </button>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <p className="font-medium text-base">Bạn đã có tài khoản? </p>
          <Link to="/login" className="text-[#0dd3b7] hover:underline hover:scale-[1.03] ml-1.5">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}
