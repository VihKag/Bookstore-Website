import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ChangePassword.css';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSavePassword = () => {
        // Kiểm tra điều kiện trước khi lưu password
        if (newPassword === confirmNewPassword) {
            // Thực hiện lưu password ở đây (ví dụ: gọi API, cập nhật trạng thái, ...)

            // Hiển thị toast thành công
            toast.success("Password saved successfully!");

            // Reset input fields
            setOldPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        } else {
            // Hiển thị toast hoặc xử lý lỗi khi password mới không khớp
            toast.error("New password and confirm password do not match");
        }
    };

    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Personal Information</h1>
            <div className='formsetting'>
                <div className='formsetting-group'>
                    <label htmlFor='name'>
                        Old Password <span className="span1">*</span>
                        <input
                            type='password'
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className='formsetting-group'>
                    <label htmlFor='name'>
                        New Password <span className="span1">*</span>
                        <input
                            type='password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className='formsetting-group'>
                    <label htmlFor='name'>
                        Confirm New Password <span className="span1">*</span>
                        <input
                            type='password'
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button className='mainbutton1' onClick={handleSavePassword}>
                    Save changes
                </button>
                <ToastContainer />
            </div>
        </div>
    );
}

export default ChangePassword;
