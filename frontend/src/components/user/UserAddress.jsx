import React from 'react'
import './UserAddress.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const UserAddress = () => {
    const [show, setShow] = React.useState(false)

    const savedaddress = [
        {
            AddressLine1: '1 Vo Van Ngan',
            AddressLine2: 'Linh Chieu',
            AddressLine3: 'Thuc Duc City',
        },
        {
            AddressLine1: '30 Tam Ky',
            AddressLine2: 'Phuong 4',
            AddressLine3: 'Tan Phu Distric',
        },
        {
            AddressLine1: '30/3 Hai Ba trung',
            AddressLine2: 'Distric 1',
            AddressLine3: 'Ho Chi Minh City',
        }
    ]
    return (
        <div className='useraddress'>
            {
                !show && <h1 className='mainhead1'>Your Address</h1>
            }
            {
                !show &&

                <div className='addressin'>
                    {
                        savedaddress.map((item, index) => {
                            return (
                                <div className='address' key={index}>
                                    <span>{item.AddressLine1}</span>,
                                    <span>{item.AddressLine2}</span>,
                                    <span>{item.AddressLine3}</span>


                                    <div className='delebtn'>
                                        <FontAwesomeIcon
                                            icon={faTrashAlt}
                                            onClick={() => console.log('Delete button clicked')}
                                        />

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                !show && <div className='addbtn'

                    onClick={() => setShow(true)}
                >
                <FontAwesomeIcon icon={faPlus} />


                </div>
            }
            {
                show &&

                <div className='addnew'>
                    <h1 className='mainhead1'>Add New Address</h1>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='postalcode'>Postal Code</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline1'>Address Line 1</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline2'>Address Line 2</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline3'>Address Line 3</label>
                            <input type="text" />
                        </div>
                    </div>

                    <button className='mainbutton1'
                        onClick={() => setShow(false)}
                    >Save</button>
                </div>
            }
        </div>
    )
}

export default UserAddress