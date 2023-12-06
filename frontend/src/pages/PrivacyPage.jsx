import React, { useState } from "react";
import Header from '../components/Header/Header';
import Footer2 from '../components/Footer/footer2';
const PrivacyPage = () => {
    const [cartItemCount] = useState(0);

    return (
        <div>
            <Header cartItemCount={cartItemCount} />
            <div>
                <h1 className='text-3xl text-center font-bold mt-4 mb-6'> Privacy</h1>
                <p className='mt-2 mb-4 ml-2 text-lg'>We respect your privacy and are committed to protecting your personal information. This privacy policy describes how we collect, use, and share the personal information you provide to us through our website or any related services.</p>

                <ul className='ml-4 mt-2 mr-2'>
                    <li className='mt-3 mb-3'>
                        1. Information We Collect
                        We may collect your personal information when you register an account, place an order, sign up for promotional information, or participate in contests. Personal information may include your name, email address, shipping address, phone number, and payment information.
                    </li>
                    <li className='mt-3 mb-3'>
                        2. Use of Information
                        We use your personal information to confirm and process orders, send order-related information, provide customer support, and promotional information (if you subscribe).
                    </li>
                    <li className='mt-3 mb-3'>
                        3. Information Security
                        We are committed to protecting your personal information and employ appropriate security measures to prevent unauthorized access, improper use, or disclosure of your personal information.
                    </li>
                    <li className='mt-3 mb-3'>
                        4. Information Sharing
                        We do not sell, exchange, or share your personal information with any third party except when necessary to process orders or as required by legal request.
                    </li>
                    <li className='mt-3 mb-6'>
                        5. Updating Information and Contact
                        You have the right to update your personal information by logging into your account on our website. If you have any questions or concerns about our privacy policy, please contact us using the information below.
                    </li>
                </ul>
            </div>
            <Footer2 />
        </div>
    );
};

export default PrivacyPage;
