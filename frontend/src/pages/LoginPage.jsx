import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/image/ic_gg.jpg";
import facebookIcon from "../assets/image/ic_fb.png";
import { login } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const usenavigate = useNavigate();

  const toggle = () => {
    setOpen(!open);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    const validationErrors = {};
    if (!username) {
      validationErrors.username = "Vui lòng nhập tên người dùng";
    }
    if (!password) {
      validationErrors.password = "Vui lòng nhập mật khẩu";
    }

    if (Object.keys(validationErrors).length > 0) {
      // If there are validation errors, set the errors state and return
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    // Perform login
    const success = await login({ username, password });
    if (success) {
      usenavigate('/');
    } else {
      usenavigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="form-login">
      <div
        className="bg-white px-8 py-8 mt-[-10px] rounded-3xl border-2 border-gray"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.05), 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 0px 2px rgba(0, 0, 0, 0.05), -1px 0px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h1 className="text-3xl font-semibold text-center mb-4">Sign in</h1>
        <p className="font-medium text-lg text-gray-500 mt-2 mb-4 ">
          Wellcome!! Please sign in your account
        </p>
        <div className="mt-2">
          <div>
            <label className="text-md font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Type your username"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div className="mt-2">
            <label className="text-md font-medium">Password</label>
            <div className="w-5/5 mx-auto relative">
              <div className="w-full">
                <input
                  name="password"
                  type={open === false ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Type your password"
                  className=" text-sm w-full border-2 border-gray-100 rounded-xl  py-2 px-4 mt-1 mb-1 bg-transparent"
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              <div className="text-sm absolute top-4 right-5">
                {open === false ? (
                  <FontAwesomeIcon icon={faEye} onClick={toggle} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" htmlFor="remember">
                Remember me
              </label>
            </div>
            <button className="font-medium text-base text-[#0dd3b7] hover:underline hover:scale-[1.03]">
              Forget password?
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-y-4">
            <button type="submit" className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-2 rounded-xl bg-[#0dd3b7] text-white text-lg font-bold">
              Sign in
            </button>
            <button className="text-md flex justify-center items-center rounded-xl py-2 border-2 border-gray-100 gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all text-lg font-semibold">
              <img src={googleIcon} alt="Google Icon" className="w-8 h-8 mr-1" />
              Sign in with Google
            </button>

            <button className="text-md flex justify-center rounded-xl py-2 border-2 border-gray-100 items-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all text-lg font-semibold">
              <img src={facebookIcon} alt="Facebook Icon" className="w-8 h-8 mr-1" />
              Sign in with Facebook
            </button>

          </div>
          <div className="mt-6 flex justify-center items-center">
            <p className="font-medium text-base">Don't you have account? </p>
            <Link to="/signup" className="text-[#0dd3b7] hover:underline hover:scale-[1.03] ml-1.5">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </form> 
  );
};

export default LoginPage;
