import React from 'react';
import Header from '../components/Header/Header';
const PrivacyPage = () => {
    return (
        <div>
            <Header />
            <div>
                <h1 className='text-3xl text-center font-bold mt-4 mb-6'> Privacy</h1>
                <p className='mt-2 mb-4 ml-2 text-lg'>Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân của bạn. Chính sách quyền riêng tư này mô tả cách chúng tôi thu thập, sử dụng và chia sẻ thông tin cá nhân bạn cung cấp cho chúng tôi thông qua trang web của chúng tôi hoặc bất kỳ dịch vụ nào liên quan.</p>

                <ul className='ml-4 mt-2 mr-2'>
                    <li className='mt-3 mb-3'>
                        1. Thông Tin Chúng Tôi Thu Thập
                        Chúng tôi có thể thu thập thông tin cá nhân của bạn khi bạn đăng ký tài khoản, đặt hàng, đăng ký nhận thông tin khuyến mãi hoặc tham gia các cuộc thi. Thông tin cá nhân có thể bao gồm tên, địa chỉ email, địa chỉ giao hàng, số điện thoại và thông tin thanh toán.
                    </li>
                    <li className='mt-3 mb-3'>
                        2. Sử Dụng Thông Tin
                        Chúng tôi sử dụng thông tin cá nhân của bạn để xác nhận và xử lý đơn hàng, gửi thông tin liên quan đến đơn hàng, cung cấp dịch vụ hỗ trợ khách hàng và thông tin khuyến mãi (nếu bạn đăng ký nhận).
                    </li>
                    <li className='mt-3 mb-3'>

                        3. Bảo Mật Thông Tin
                        Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và sử dụng các biện pháp an ninh phù hợp để ngăn chặn truy cứu, sử dụng không đúng cách hoặc tiết lộ thông tin cá nhân của bạn.
                    </li>
                    <li className='mt-3 mb-3'>

                        4. Chia Sẻ Thông Tin
                        Chúng tôi không bán, trao đổi hoặc chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào khác ngoại trừ trường hợp chúng tôi cần chia sẻ thông tin để xử lý đơn hàng hoặc theo yêu cầu pháp lý.
                    </li>
                    <li className='mt-3 mb-3'>

                        5. Cập Nhật Thông Tin và Liên Hệ
                        Bạn có quyền cập nhật thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản của bạn trên trang web của chúng tôi. Nếu bạn có bất kỳ câu hỏi hoặc lo ngại nào về chính sách quyền riêng tư của chúng tôi, vui lòng liên hệ với chúng tôi theo thông tin dưới đây.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PrivacyPage;
