import React, { useState } from "react";
import Header from '../components/Header/Header';
import AccordionComponent from '../components/Other/Accordion';
import Footer2 from '../components/Footer/footer2';
const TermPage = () => {
    const [cartItemCount] = useState(0);
    return (
        <div>
            <Header cartItemCount={cartItemCount} />
            <div>
                <h1 className='text-3xl text-center font-bold mt-4 mb-6'> Terms & Conditions</h1>
                <p className='ml-2 mr-2 mb-4'>Welcome to our website. Before you start shopping or using our services, please carefully read these Terms and Conditions of Use. By accessing or using any part of the website, you agree to comply with the terms and conditions below. If you do not agree with these terms, you should not use our website.</p>
            </div>
            <AccordionComponent />
            <Footer2 />
        </div>
    );
};

export default TermPage;
