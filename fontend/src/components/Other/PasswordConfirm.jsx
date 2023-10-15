import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const PasswordConfirm = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <section>
        <div className="w-5/5 mx-auto relative">
          <div className="w-full">
            <input
              type={open === false ? "password" : "text"}
              placeholder="Xác nhận mật khẩu"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 mb-1 bg-transparent"
            />
          </div>
          <div className="text-2xl absolute top-4 right-5">
            {open === false ? (
              <FontAwesomeIcon icon={faEye} onClick={toggle} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PasswordConfirm;
