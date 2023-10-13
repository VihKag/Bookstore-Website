import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React from "react";
import Carousel from "../components/Carousel/Carousel";
const Home = () => {
  return (
    <>
      <Header />
      <Carousel/>
      <div className="container">
        <section>
          {/* Banner quảng cáo */}
          <div className="banner">

          </div>
        </section>

        <section>
          {/* Danh sách Sách Mới */}
          <h2>Sách Mới</h2>
          <div className="sach-moi">
            {/* Hiển thị danh sách sách mới */}
            <div className="sach">
              <img src="sach1.jpg" alt="Sách 1" />
              <p>Tiêu đề sách 1</p>
              <p>Tác giả sách 1</p>
              <p>Giá: $19.99</p>
              <button>Mua ngay</button>
            </div>
            {/* Các cuốn sách khác... */}
          </div>
        </section>

        <section>
          {/* Danh sách Sách Bán Chạy */}
          <h2>Sách Bán Chạy</h2>
          <div className="sach-ban-chay">
            {/* Hiển thị danh sách sách bán chạy */}
            <div className="sach">
              <img src="sach2.jpg" alt="Sách 2" />
              <p>Tiêu đề sách 2</p>
              <p>Tác giả sách 2</p>
              <p>Giá: $24.99</p>
              <button>Mua ngay</button>
            </div>
            {/* Các cuốn sách khác... */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Home;
