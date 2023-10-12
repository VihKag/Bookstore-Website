import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import backgroundImage from "./assets/image/bg.gif";
function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Đảm bảo hình ảnh được hiển thị đầy đủ trong phần nền
    backgroundPosition: "center", // Đặt vị trí hiển thị của hìnhs ảnh
  };

  return (
    <div className="flex w-full h-screen">
      <div
        style={backgroundStyle}
        className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200"
      >
        {/* <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to bg-pink-500 rounded-full animate-bounce" /> */}
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        {/* <SignupPage /> */}
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
