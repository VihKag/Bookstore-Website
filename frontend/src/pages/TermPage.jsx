import React from 'react';
import Header from '../components/Header/Header';
import AccordionComponent from '../components/Other/Accordion';
import Footer2 from '../components/footer2/footer2';
const TermPage = () => {
    return (
        <div>
             <Header/>
             <div>
                <h1 className='text-3xl text-center font-bold mt-4 mb-6'> Terms & Conditions</h1>
                <p className='ml-2 mr-2 mb-4'>Chào mừng bạn đến với trang web của chúng tôi. Trước khi bạn bắt đầu mua sắm hoặc 
                    sử dụng dịch vụ của chúng tôi, hãy đọc kỹ Điều Khoản và Điều Kiện Sử Dụng này. 
                    Bằng cách truy cập hoặc sử dụng bất kỳ phần nào của trang web, 
                    bạn đồng ý tuân thủ các điều khoản và điều kiện dưới đây. Nếu bạn không đồng ý với các điều khoản này, 
                    bạn không nên sử dụng trang web của chúng tôi.</p>
             </div>
         <AccordionComponent/>
         <Footer2/>
        </div>
    );
};

export default TermPage;
