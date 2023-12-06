import React from "react";
import "../App.css";
import SignupPage from "./SignupPage";
import backgroundImage from "../assets/image/bg.gif";
function Signup() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
        <SignupPage />
      </div>
    </div>
  );
}

export default Signup;
