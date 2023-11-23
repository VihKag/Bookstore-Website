import React from 'react';
import './AccountSetting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

const UserAddress = () => {
    const [show, setShow] = React.useState(false);

    return (
        <div className='accountsetting'>
            {!show && <h1 className='mainhead1'>Your Personal Information</h1>}
            {!show && (
                <div className='formsetting'>
                    <div className='acc-formsetting-group'>
                        <label htmlFor='name'>
                            Your name: <span > Thai Phuc</span>

                        </label>
                    </div>
                    <div className='acc-formsetting-group'>
                        <label htmlFor='phone'>
                            Phone/Mobile: <span > 0987654321 </span>

                        </label>
                    </div>
                    <div className='acc-formsetting-group'>
                        <label htmlFor='email'>
                            Email: <span > thaiphuc@gmail.com </span>

                        </label>
                    </div>
                    <div className='acc-formsetting-group'>
                        <label htmlFor='gender'>
                            Gender: <span > Male</span>

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
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Phone/mobile</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type="email" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='gender'>Gender</label>
                            <input type="text" />
                        </div>
                    </div>

                    <button
                        className='mainbutton1'
                        onClick={() => setShow(false)}
                    >
                        Save
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserAddress;
