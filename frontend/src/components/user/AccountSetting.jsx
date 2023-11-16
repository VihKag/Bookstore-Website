import React from 'react';
import "./AccountSetting.css"
const AccountSetting = () => {
    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Personal Information</h1>
            <div className='formsetting'>
                <div className='formsetting-group'>
                    <label htmlFor='name'>
                        Your name <span className="span1">*</span>
                        <input type='text' name='name' id='name'></input>
                    </label>
                </div>
                <div className='formsetting-group'>
                    <label htmlFor='name'>
                        Phone/Mobile <span className="span1">*</span>
                        <input type='text' name='phone' id='phone'></input>
                    </label>
                </div><div className='formsetting-group'>
                    <label htmlFor='name'>
                        Email <span className="span1">*</span>
                        <input type='text' name='email' id='email'></input>
                    </label>
                </div>
                <button className='mainbutton1'>
                    Save changes
                </button>
            </div>
        </div>
    )
}
export default AccountSetting;