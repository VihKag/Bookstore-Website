import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/AuthApi";

export default function SignupPage() {
  const [open, setOpen] = useState(false);
  const usenavigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });

  const toggle = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ["username", "name", "phone", "email", "password", "confirm"];
    let isValid = true;

    const newFormErrors = { ...formErrors };

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newFormErrors[field] = "Please enter your information";
        isValid = false;
      }
    });

    if (formData.confirm !== formData.password) {
      newFormErrors.confirm = "Password does not match";
      isValid = false;
    }

    setFormErrors(newFormErrors);

    if (isValid) {
      const success = await signup(formData);
      if (success) {
        usenavigate('/');
      } else {
        console.log('Signup failed');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="form-signup">
        <div
          className="bg-white px-8 py-4 mt-[-10px] rounded-3xl border-2 border-gray"
          style={{
            boxShadow:
              "0px 1px 2px rgba(0, 0, 0, 0.05), 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 0px 2px rgba(0, 0, 0, 0.05), -1px 0px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h1 className="text-2xl font-semibold text-center ">Sign up</h1>
          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              className="text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Type your username"
              onChange={handleChange}
              value={formData.username}
            />
            {formErrors.username && (
              <p className="text-red-500 text-xs mt-1">{formErrors.username}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              className=" text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Type your name"
              onChange={handleChange}
              value={formData.name}
            />
            {formErrors.name && (
              <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
            )}
          </div>
          <div>
            <label className="text-smfont-medium" >Phone number</label>
            <input
              type="text"
              name="phone"
              className="text-sm w-full border-2 border-gray-100 rounded-xl  py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Type your phone number"
              onChange={handleChange}
              value={formData.phone}
            />
            {formErrors.phone && (
              <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
              placeholder="Type your email"
              onChange={handleChange}
              value={formData.email}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>
          <div className="mt-2">
            <label className="text-sm font-medium">Password</label>
            <section>
              <div className="w-5/5 mx-auto relative">
                <div className="w-full">
                  <input
                    name="password"
                    type={open === false ? "password" : "text"}
                    placeholder="Type your password"
                    className=" text-sm w-full border-2 border-gray-100 rounded-xl  py-2 px-4 mt-1 mb-1 bg-transparent"
                    onChange={handleChange}
                    value={formData.password}
                  />
                </div>
                <div className="text-sm absolute top-4 right-5">
                  {open === false ? (
                    <FontAwesomeIcon icon={faEye} onClick={toggle} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
                  )}
                </div>
              </div>
            </section>
            {formErrors.password && (
              <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
            )}
          </div>
          <div className="mt-2">
            <label className="text-sm font-medium">Confirm your password</label>
            <section>
              <div className="w-5/5 mx-auto relative">
                <div className="w-full">
                  <input
                    name="confirm"
                    type={open === false ? "password" : "text"}
                    placeholder="Confirm Password"
                    className="text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
                    onChange={handleChange}
                    value={formData.confirm}
                  />
                </div>
                <div className="text-sm absolute top-4 right-5">
                  {open === false ? (
                    <FontAwesomeIcon icon={faEye} onClick={toggle} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
                  )}
                </div>
              </div>
            </section>
            {formErrors.confirm && (
              <p className="text-red-500 text-xs mt-1">{formErrors.confirm}</p>
            )}
          </div>
          <div className=" text-sm mt-4 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" htmlFor="remember">
                I agree with assignments
              </label>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-2 rounded-xl bg-[#0dd3b7]
            text-white text-lg font-bold"
            >
              Save
            </button>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <p className="font-medium text-base">Did you have account? </p>
            <Link to="/login" className="text-sm text-[#0dd3b7] hover:underline hover:scale-[1.03] ml-1.5">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
