import * as React from "react";
import PasswordApp from "./PasswordApp";

const LoginPage = () => {
  return (
    <div
      className="bg-white px-14 py-16 mt-[-10px] rounded-3xl border-2 border-gray"
      style={{
        boxShadow:
          "0px 1px 2px rgba(0, 0, 0, 0.05), 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 0px 2px rgba(0, 0, 0, 0.05), -1px 0px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h1 className="text-5xl font-semibold text-center mb-2">Đăng Nhập</h1>
      <p className="font-medium text-lg text-gray-500 mt-4 ">
        Xin chào! Mời bạn đăng nhập tài khoản
      </p>
      <div className="mt-2">
        <div>
          <label className="text-lg font-medium">Tài khoản</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 mb-1 bg-transparent"
            placeholder="Nhập tên người dùng"
          />
        </div>
        <div className="mt-2">
          <label className="text-lg font-medium">Mật khẩu</label>
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
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-2 rounded-xl bg-[#0dd3b7] text-white text-lg font-bold">
            Đăng nhập
          </button>
          <button className="flex justify-center rounded-xl py-2 border-2 border-gray-100 items-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all text-lg font-semibold">
            <svg
              width="30px"
              height="30px"
              viewBox="-0.5 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google-color</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    ></path>
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            Đăng nhập với Google
          </button>
          <button className="flex justify-center rounded-xl py-2 border-2 border-gray-100 items-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all text-lg font-semibold">
            <svg
              width="33px"
              height="33px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fill="#1877F2"
                d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
              />
              <path
                fill="#ffffff"
                d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
              />
            </svg>
            Đăng nhập với Facebook
          </button>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <p className="font-medium text-base">Bạn chưa có tài khoản? </p>
          <button className="font-medium text-base text-[#0dd3b7] hover:underline hover:scale-[1.03] ml-1.5">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
