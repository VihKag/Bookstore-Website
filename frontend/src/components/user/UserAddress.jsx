import React, { useState } from 'react';
import './UserAddress.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserAddress = () => {
    const [show, setShow] = useState(false);
    const [newAddress, setNewAddress] = useState({
        postalCode: '',
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
    });
    const [savedAddresses, setSavedAddresses] = useState([
        {
            postalCode: '12345',
            AddressLine1: '1 Vo Van Ngan',
            AddressLine2: 'Linh Chieu',
            AddressLine3: 'Thuc Duc City',
        },
        {
            postalCode: '67890',
            AddressLine1: '30 Tam Ky',
            AddressLine2: 'Phuong 4',
            AddressLine3: 'Tan Phu Distric',
        },
        {
            postalCode: '54321',
            AddressLine1: '30/3 Hai Ba trung',
            AddressLine2: 'Distric 1',
            AddressLine3: 'Ho Chi Minh City',
        },
    ]);

    const handleInputChange = (e, field) => {
        setNewAddress({
            ...newAddress,
            [field]: e.target.value,
        });
    };

    const handleSave = () => {
        const newAddressObject = {
            postalCode: newAddress.postalCode,
            AddressLine1: newAddress.addressLine1,
            AddressLine2: newAddress.addressLine2,
            AddressLine3: newAddress.addressLine3,
        };

        setSavedAddresses([...savedAddresses, newAddressObject]);
        setNewAddress({
            postalCode: '',
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
        });
        setShow(false);

        // Show toast
        toast.success('New address saved successfully');
    };

    const handleDelete = (index) => {
        const newAddresses = [...savedAddresses];
        newAddresses.splice(index, 1);
        setSavedAddresses(newAddresses);

        // Show toast
        toast.error('Address deleted');
    };

    return (
        <div className='useraddress'>
            {!show && <h1 className='mainhead1'>Your Address</h1>}
            {!show && (
                <div className='addressin'>
                    {savedAddresses.map((item, index) => (
                        <div className='address' key={index}>
                            <span>{item.postalCode}</span>,
                            <span>{item.AddressLine1}</span>,
                            <span>{item.AddressLine2}</span>,
                            <span>{item.AddressLine3}</span>
                            <div className='delebtn'>
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    onClick={() => handleDelete(index)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!show && (
                <div
                    className='addbtn'
                    onClick={() => setShow(true)}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            )}

            {show && (
                <div className='addnew'>
                    <h1 className='mainhead1'>Add New Address</h1>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='postalcode'>Postal Code</label>
                            <input
                                type='text'
                                value={newAddress.postalCode}
                                onChange={(e) => handleInputChange(e, 'postalCode')}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline1'>Address Line 1</label>
                            <input
                                type='text'
                                value={newAddress.addressLine1}
                                onChange={(e) => handleInputChange(e, 'addressLine1')}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline2'>Address Line 2</label>
                            <input
                                type='text'
                                value={newAddress.addressLine2}
                                onChange={(e) => handleInputChange(e, 'addressLine2')}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline3'>Address Line 3</label>
                            <input
                                type='text'
                                value={newAddress.addressLine3}
                                onChange={(e) => handleInputChange(e, 'addressLine3')}
                            />
                        </div>
                    </div>

                    <button
                        className='mainbutton1'
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default UserAddress;
