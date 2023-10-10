import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import baner1 from '../../assets/banner/banner1.jpg'
const CarouselSlider = () => {
  return (
    <Carousel
      showArrows={true} // Hiển thị nút chuyển ảnh
      infiniteLoop={true} // Lặp vô tận qua các ảnh
    >
      <div>
        <img src={baner1} alt="Slide 1" />
      </div>
      <div>
        <img src={baner1} alt="Slide 2" />
      </div>
      {/* Thêm nội dung cho các slide khác tương tự */}
    </Carousel>
  );
};

export default CarouselSlider;
