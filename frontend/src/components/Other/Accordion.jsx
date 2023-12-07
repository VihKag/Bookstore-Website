import React from 'react';

const AccordionComponent = () => {
    const handleAccordionToggle = (accordionId) => {
        const accordionBody = document.getElementById(accordionId);
        accordionBody.classList.toggle('hidden');
    };

    return (
        <div className='mb-10 mt-10' id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
            <h2 id="accordion-color-heading-1">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1" onClick={() => handleAccordionToggle("accordion-color-body-1")}>
                    <span>Order Information?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">We commit to providing accurate and detailed information about products and prices on our website. However, we may refuse or cancel any order with inaccurate or incomplete information about products or prices. Your order is not considered official until we confirm it.</p>
                    <p className="text-gray-500 dark:text-gray-400">Click to see more details <a href="https://www.bray.com/docs/default-source/administration/purchase-order-terms-conditions/vietnam(vietnamese).pdf" className="text-blue-600 dark:text-blue-500 hover:underline">here</a> and start shopping on the website.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-2">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2" onClick={() => handleAccordionToggle("accordion-color-body-2")}>
                    <span>Payment?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">We accept payment methods including credit cards and bank transfers. Payment will be confirmed before we process your order. By making a payment, you confirm that you are the legitimate owner of the credit card or bank account used for payment.</p>
                    <p className="text-gray-500 dark:text-gray-400">Please check <a href="https://esoc.vn/tin-tuc/nhung-dieu-khoan-thanh-toan-trong-hop-dong-thuong-mai-ban-can-biet" className="text-blue-600 dark:text-blue-500 hover:underline">payment information</a> for more details.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-3">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3" onClick={() => handleAccordionToggle("accordion-color-body-3")}>
                    <span>Delivery and Returns?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">We are committed to providing on-time delivery services. In case the product is damaged or does not meet your expectations, we will refund or exchange the product according to our regulations.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Please check the goods and order information before receiving the goods.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Return support conditions:</p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                        <li><a href="/" className="text-blue-600 dark:text-blue-500 hover:underline">Not more than 3 days from the date of receipt</a></li>
                        <li><a href="/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Have a video recording when receiving the goods</a></li>
                    </ul>
                </div>
            </div>
            {/* Additional Accordions */}
            <h2 id="accordion-color-heading-4">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-4" aria-expanded="false" aria-controls="accordion-color-body-4" onClick={() => handleAccordionToggle("accordion-color-body-4")}>
                    <span>Privacy and Security?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-4" className="hidden" aria-labelledby="accordion-color-heading-4">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">We respect your privacy and are committed to protecting your personal information. Details on the collection and use of your personal information are described in our Privacy Policy.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-5">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-5" aria-expanded="false" aria-controls="accordion-color-body-5" onClick={() => handleAccordionToggle("accordion-color-body-5")}>
                    <span>Legal Use?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-5" className="hidden" aria-labelledby="accordion-color-heading-5">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">You commit not to use our website for illegal or improper purposes. You are not allowed to upload or transmit any files, data, or software that may harm the website or other users.</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionComponent;
