import React from "react";
import "./App.css"; // Nếu bạn có các quy tắc CSS tùy chỉnh, hãy import chúng ở đây
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
function App() {
  return (
    <div className="flex w-full h-screen">
      {/* Phần Form được đặt bên phải bằng cách sử dụng các lớp Tailwind */}
      <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to bg-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
      {/* Phần Form được đặt bên phải */}
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginPage />
        {/* <SignupPage /> */}
      </div>
    </div>
  );
}

export default App;
