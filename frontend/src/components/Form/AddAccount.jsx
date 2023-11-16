import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api/AuthApi";
export default function AddAccount() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const usenavigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.confirm !== formData.password) {
      alert("Password and Confirm Password are not the same");
      return false;
    } else {
      const success = await signup(formData);
      if (success) {
        usenavigate("/");
      } else {
        console.log("Signup failed");
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
          <h1 className="text-2xl font-semibold text-center ">Tạo tài khoản</h1>
          <div className="mt-2">
            <div>
              <label className="text-sm font-medium">Tên đăng nhập</label>
              <input
                type="text"
                name="username"
                className="text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
                placeholder="Nhập tên đăng nhập"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Tên người dùng</label>
              <input
                type="text"
                name="name"
                className=" text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
                placeholder="Nhập tên người dùng"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div>
              <label className="text-smfont-medium">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                className="text-sm w-full border-2 border-gray-100 rounded-xl  py-2 px-4 mt-1 mb-1 bg-transparent"
                placeholder="Nhập số điện thoại"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="text-sm w-full border-2 border-gray-100 rounded-xl py-2 px-4 mt-1 mb-1 bg-transparent"
                placeholder="Nhập email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">Mật khẩu</label>
              <section>
                <div className="w-5/5 mx-auto relative">
                  <div className="w-full">
                    <input
                      name="password"
                      type={open === false ? "password" : "text"}
                      placeholder="Nhập mật khẩu"
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
            </div>
            <div className="mt-2">
              <label className="text-sm font-medium">Xác nhận mật khẩu</label>
              <section>
                <div className="w-5/5 mx-auto relative">
                  <div className="w-full">
                    <input
                      name="confirm"
                      type={open === false ? "password" : "text"}
                      placeholder="Xác nhận mật khẩu"
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
          </div>
        </div>
      </form>
    </>
  );
}