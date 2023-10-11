import * as React from "react";
import PasswordApp from "./PasswordApp";
export default function SignupPage() {
  return (
    <div className="bg-white px-12 py-16 rounded-3xl border-2 border-gray">
      <h1 className="text-5xl font-semibold text-center">Đăng Ký</h1>
      <p className=" text-center font-medium text-lg text-gray-500 mt- ">
        Xin chào! Mời bạn đăng ký tài khoản
      </p>
      <div className="mt-2">
        <div>
          <label className="text-lg font-medium">Tài khoản</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 mb-1 bg-transparent"
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
          <PasswordApp />
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
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-2 rounded-xl bg-gradient-to-tr from-violet-500 to bg-pink-500 text-white text-lg font-bold">
            Xác nhận
          </button>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <p className="font-medium text-base">Bạn đã có tài khoản? </p>
          <button className="font-medium text-base text-violet-500 hover:underline hover:scale-[1.03] ml-1.5">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}
