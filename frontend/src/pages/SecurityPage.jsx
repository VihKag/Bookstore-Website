import React from 'react';
import Header from '../components/Header/Header';
import Footer2 from '../components/Footer/footer2';
const SecurityPage = () => {
    return (
        <div>
            <Header />
            <div>
                <h1 className='text-3xl text-center font-bold mt-4 mb-6'> Security</h1>
                <p className='mt-2 mb-4 ml-2 text-lg'>Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân của bạn. Chính sách quyền riêng tư này mô tả cách chúng tôi thu thập, sử dụng và chia sẻ thông tin cá nhân bạn cung cấp cho chúng tôi thông qua trang web của chúng tôi hoặc bất kỳ dịch vụ nào liên quan.</p>

                <ul className='ml-4 mt-2 mr-2'>
                    <li className='mt-3 mb-3'>
                        1. Bảo Mật Thông Tin Khách Hàng:
                        Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. Mọi thông tin mà bạn cung cấp cho chúng tôi sẽ được bảo mật và không bao giờ được tiết lộ cho bất kỳ bên thứ ba nào mà không có sự cho phép của bạn.
                    </li>
                    <li className='mt-3 mb-3'>
                        2. Bảo Mật Giao Dịch Thanh Toán:
                        Chúng tôi sử dụng các phương thức thanh toán an toàn và đáng tin cậy để đảm bảo rằng thông tin thanh toán của bạn được bảo vệ. Chúng tôi không lưu giữ thông tin thẻ tín dụng của bạn trên hệ thống của chúng tôi.
                    </li>
                    <li className='mt-3 mb-3'>

                        3. Bảo Mật Dữ Liệu:
                        Chúng tôi áp dụng các biện pháp an ninh công nghệ để bảo vệ dữ liệu của bạn khỏi việc truy cứu, sử dụng không đúng cách hoặc tiết lộ cho bất kỳ ai khác.
                    </li>
                    <li className='mt-3 mb-3'>

                        4. Phát Hiện Và Ngăn Chặn Kỹ Thuật Số:
                        Chúng tôi sử dụng các công nghệ phát hiện và ngăn chặn để bảo vệ trang web của chúng tôi khỏi các tấn công kỹ thuật số như tấn công DDoS và tấn công SQL Injection.
                    </li>
                    <li className='mt-3 mb-6'>

                        5. Cập Nhật Bảo Mật:
                        Chúng tôi duy trì và cập nhật định kỳ các hệ thống và phần mềm để đảm bảo rằng chúng luôn đáp ứng với các tiêu chuẩn bảo mật cao nhất.
                    </li>
                </ul>
            </div>
            <Footer2/>
        </div>
    );
};

export default SecurityPage;
