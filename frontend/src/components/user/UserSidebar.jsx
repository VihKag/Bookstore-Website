import React from 'react';
import "./UserSidebar.css";
import { faCartShopping, faCog, faLocationDot, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const UserSidebar = ({ activepage }) => {
    return (
        <div className='usersidebar'>
            {
                activepage === 'accountsettings' ?
                    <div className='s2'>
                        <FontAwesomeIcon icon={faCog} className='icon' />
                        <span> Account Settings </span>
                    </div>
                    :
                    <Link to='/user/accountsettings' className='styleone'>
                        <div className='s1'>
                            <FontAwesomeIcon icon={faCog} className='icon' />
                            <span> Account Settings </span>
                        </div>
                    </Link>
            }
            {
                activepage === 'yourorders ' ?
                    <div className='s2'>
                        <FontAwesomeIcon icon={faCartShopping} className='icon' />
                        <span> My Orders </span>
                    </div>
                    :
                    <Link to='/user/yourorders' className='styleone'>

                        <div className='s1'>
                            <FontAwesomeIcon icon={faCartShopping} className='icon' />
                            <span> My Orders </span>
                        </div>
                    </Link>
            }
            {
                activepage === 'changepassword' ?
                    <div className='s2'>
                        <FontAwesomeIcon icon={faLock} className='icon' />
                        <span> Change Password </span>
                    </div>
                    :
                    <Link to='/user/changepassword' className='styleone'>

                        <div className='s1'>
                            <FontAwesomeIcon icon={faLock} className='icon' />
                            <span> Change Password </span>
                        </div>
                    </Link>
            }
            {
                activepage === 'youraddress' ?
                    <div className='s2'>
                        <FontAwesomeIcon icon={faLocationDot} className='icon' />
                        <span> Change Address </span>
                    </div>
                    :
                    <Link to='/user/youraddress' className='styleone'>

                        <div className='s1'>
                            <FontAwesomeIcon icon={faLocationDot} className='icon' />
                            <span> Change Address</span>
                        </div>
                    </Link>
            }
        </div>
    );
}

export default UserSidebar;
