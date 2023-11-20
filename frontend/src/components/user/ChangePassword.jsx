import React from "react";
const ChangePassword = () => {
    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Personal Information</h1>
            <div className='formsetting'>
                <div className='formsetting-group'>
                    <label htmlFor='name'>
                        Old Password <span className="span1">*</span>
                        <input type='password'></input>
                    </label>
                </div>
                <div className='formsetting-group'>
                    <label htmlFor='name'>
                        New Password <span className="span1">*</span>
                        <input type='password'></input>
                    </label>
                </div>
                <div className='formsetting-group'>
                    <label htmlFor='name'>
                        Confirm New Password <span className="span1">*</span>
                        <input type='password'></input>
                    </label>
                </div>
                <button className='mainbutton1'>
                    Save changes
                </button>
            </div>
        </div>
    )
}
export default ChangePassword;