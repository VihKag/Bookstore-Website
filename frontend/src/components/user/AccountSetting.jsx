import React, { useState } from 'react';
import './AccountSetting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountSetting = () => {
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({
        name: 'Thai Phuc',
        phone: '0987654321',
        email: 'thaiphuc@gmail.com',
        gender: 'Male',
    });

    const handleInputChange = (e, field) => {
        setUserData({
            ...userData,
            [field]: e.target.value,
        });
    };

    const handleSave = () => {
        // Add logic to save updated user data, e.g., make an API call

        // Show toast
        toast.success('User information updated successfully');

        // Close the edit mode
        setShow(false);
    };

    return (
        <div className='accountsetting'>
            {!show && <h1 className='mainhead1'>Your Personal Information</h1>}
            {!show && (
                <div className='formsetting'>
                    <div className='acc-formsetting-group'>
                        <label htmlFor='name'>
                            Your name: <span>{userData.name}</span>
                        </label>
                    </div>
                    <div className='acc-formsetting-group'>
                        <label htmlFor='phone'>
                            Phone/Mobile: <span>{userData.phone}</span>
                        </label>
                    </div>
                    <div className='acc-formsetting-group'>
                        <label htmlFor='email'>
                            Email: <span>{userData.email}</span>
                        </label>
                    </div>
                    <div className='acc-formsetting-group'>
                        <label htmlFor='gender'>
                            Gender: <span>{userData.gender}</span>
                        </label>
                    </div>
                </div>
            )}

            {!show && (
                <div className='addbtn' onClick={() => setShow(true)}>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            )}

            {show && (
                <div className='addnew'>
                    <h1 className='mainhead1'>Change your Information</h1>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='name'>Your name</label>
                            <input
                                type='text'
                                value={userData.name}
                                onChange={(e) => handleInputChange(e, 'name')}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Phone/mobile</label>
                            <input
                                type='text'
                                value={userData.phone}
                                onChange={(e) => handleInputChange(e, 'phone')}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                value={userData.email}
                                onChange={(e) => handleInputChange(e, 'email')}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='gender'>Gender</label>
                            <input
                                type='text'
                                value={userData.gender}
                                onChange={(e) => handleInputChange(e, 'gender')}
                            />
                        </div>
                    </div>

                    <button className='mainbutton1' onClick={handleSave}>
                        Save
                    </button>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default AccountSetting;
