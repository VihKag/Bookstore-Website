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
                    <span>Thông Tin Đặt Hàng?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Chúng tôi cam kết cung cấp thông tin chính xác và chi tiết về sản phẩm và giá trên trang web của mình. Tuy nhiên, chúng tôi có thể từ chối hoặc hủy bỏ bất kỳ đơn đặt hàng nào với thông tin không chính xác hoặc không đầy đủ về sản phẩm hoặc giá. Đơn đặt hàng của bạn không được coi là chính thức cho đến khi chúng tôi xác nhận nó.</p>
                    <p className="text-gray-500 dark:text-gray-400">Click và xem thêm chi tiết <a href="https://www.bray.com/docs/default-source/administration/purchase-order-terms-conditions/vietnam(vietnamese).pdf" className="text-blue-600 dark:text-blue-500 hover:underline">tại đây</a> và bắt đầu thực hiện mua sắm tại website.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-2">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2" onClick={() => handleAccordionToggle("accordion-color-body-2")}>
                    <span>Thanh Toán?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Chúng tôi chấp nhận các phương thức thanh toán bao gồm thẻ tín dụng và chuyển khoản ngân hàng. Thanh toán sẽ được xác nhận trước khi chúng tôi xử lý đơn đặt hàng của bạn. Bằng cách thanh toán, bạn xác nhận rằng bạn là chủ nhân hợp pháp của thẻ tín dụng hoặc tài khoản ngân hàng được sử dụng để thanh toán.</p>
                    <p className="text-gray-500 dark:text-gray-400">Vui lòng kiểm tra <a href="https://esoc.vn/tin-tuc/nhung-dieu-khoan-thanh-toan-trong-hop-dong-thuong-mai-ban-can-biet" className="text-blue-600 dark:text-blue-500 hover:underline">thông tin thanh toán</a> để biết thêm chi tiết.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-3">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3" onClick={() => handleAccordionToggle("accordion-color-body-3")}>
                    <span> Giao Hàng và Trả Hàng?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Chúng tôi cam kết cung cấp dịch vụ giao hàng đúng hẹn. Trong trường hợp sản phẩm bị hỏng hoặc không đáp ứng được mong muốn của bạn, chúng tôi sẽ hoàn trả hoặc đổi sản phẩm theo quy định của chúng tôi.

                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Vui lòng kiểm tra hàng và thông tin đơn hàng trước khi nhận hàng </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Điều kiện hỗ trợ trả hàng </p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                        <li><a href="/" className="text-blue-600 dark:text-blue-500 hover:underline">Không quá 3 ngày kể từ lúc nhận hàng</a></li>
                        <li><a href="/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Có video quay lại khi nhận hàng</a></li>
                    </ul>
                </div>
            </div>
            {/* Additional Accordions */}
            <h2 id="accordion-color-heading-4">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-4" aria-expanded="false" aria-controls="accordion-color-body-4" onClick={() => handleAccordionToggle("accordion-color-body-4")}>
                    <span>Quyền Riêng Tư và Bảo Mật?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-4" className="hidden" aria-labelledby="accordion-color-heading-4">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân của bạn. Thông tin chi tiết về việc thu thập và sử dụng thông tin cá nhân của bạn được mô tả chi tiết trong Chính Sách Quyền Riêng Tư của chúng tôi.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-5">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-5" aria-expanded="false" aria-controls="accordion-color-body-5" onClick={() => handleAccordionToggle("accordion-color-body-5")}>
                    <span>Sử Dụng Trái Pháp Luật?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-5" className="hidden" aria-labelledby="accordion-color-heading-5">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Bạn cam kết không sử dụng trang web của chúng tôi cho mục đích bất hợp pháp hoặc không đúng mục đích. Bạn không được phép tải lên hoặc truyền tải bất kỳ tệp tin, dữ liệu hoặc phần mềm nào có thể gây hại cho trang web hoặc cho người dùng khác.</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionComponent;
