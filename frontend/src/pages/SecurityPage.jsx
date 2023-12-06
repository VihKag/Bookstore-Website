import React, { useState } from "react";
import Header from '../components/Header/Header';
import Footer2 from '../components/Footer/footer2';

const SecurityPage = () => {
    const [cartItemCount] = useState(0);

    return (
        <div>
            <Header cartItemCount={cartItemCount} />
            <div>
                <h1 className='text-3xl text-center font-bold mt-4 mb-6'> Security</h1>
                <p className='mt-2 mb-4 ml-2 text-lg'>We respect your privacy and are committed to protecting your personal information. This privacy policy describes how we collect, use, and share the personal information you provide to us through our website or any related services.</p>

                <ul className='ml-4 mt-2 mr-2'>
                    <li className='mt-3 mb-3'>
                        1. Customer Information Security:
                        We are committed to protecting your personal information. Any information you provide to us will be secured and will never be disclosed to any third party without your permission.
                    </li>
                    <li className='mt-3 mb-3'>
                        2. Secure Payment Transactions:
                        We use secure and reliable payment methods to ensure that your payment information is protected. We do not store your credit card information on our system.
                    </li>
                    <li className='mt-3 mb-3'>
                        3. Data Security:
                        We implement technological security measures to protect your data from unauthorized access, misuse, or disclosure to anyone else.
                    </li>
                    <li className='mt-3 mb-3'>
                        4. Digital Detection and Prevention:
                        We use detection and prevention technologies to protect our website from digital attacks such as DDoS attacks and SQL Injection attacks.
                    </li>
                    <li className='mt-3 mb-6'>
                        5. Security Updates:
                        We regularly maintain and update systems and software to ensure they always meet the highest security standards.
                    </li>
                </ul>

            </div>
            <Footer2/>
        </div>
    );
};

export default SecurityPage;
