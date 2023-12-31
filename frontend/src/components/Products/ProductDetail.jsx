import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../../assets/image/book1.jpg"
import {
  faStar,
  faStarHalfAlt,
  faCheckCircle,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  useEffect(() => {
    // Ensure DOM is fully loaded before accessing elements
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    )?.clientWidth;

    if (displayWidth) {
      slideImage(displayWidth);
    }
  }, []);

  function slideImage(displayWidth) {
    document.querySelector(".img-showcase").style.transform = `translateX(${-(1 - 1) * displayWidth
      }px)`;
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-screen-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="img-display overflow-hidden">
            <div className="img-container" style={{ height: "500px" }}>
              <img
                src={pic}
                alt="pic"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-2">ĐẮC NHÂN TÂM</h2>
            <p className="text-1xl text-gray-500 mb-2">Sold 12.5k products</p>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                className="text-yellow-500"
              />
              <span className="ml-2 text-gray-700">4.7(21)</span>
            </div>

            <div className="mb-2">
              <p className="text-1.5xl">
                <span className="text-black">Old price: </span>
                <span className="text-blue-500 line-through">257.00VND</span>
              </p>
              <p className="text-1.5xl">
                New price: <span className="text-red-500 mr-1">249.000VND</span>
                <span
                  style={{
                    backgroundColor: "red",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "4px",
                    color: "white",
                    display: "inline-block", // Hiển thị trên cùng một dòng
                    fontSize: "0.9rem",
                  }}
                >
                  -5%
                </span>
              </p>
            </div>

            {/* Product description */}
            <div className="mb-1">
              <h2 className="text-xl font-semibold mb-1">
                Product details:
              </h2>
              <p className="text-m text-justify text-gray-700 mb-1">
                Hiện nay có một sự hiểu nhầm đã xảy ra. Tuy Đắc Nhân Tâm là tựa
                sách hầu hết mọi người đều biết đến, vì những danh tiếng và mức
                độ phổ biến, nhưng một số người lại “ngại” đọc. Lý do vì họ
                tưởng đây là cuốn sách “dạy làm người” nên có tâm lý e ngại. Có
                lẽ là do khi giới thiệu về cuốn sách, người ta luôn gắn với miêu
                tả đây là “nghệ thuật đối nhân xử thế”, “nghệ thuật thu phục
                lòng người”… Những cụm từ này đã không còn hợp với hiện nay nữa,
                gây cảm giác xa lạ và không thực tế. xem thêm
              </p>
            </div>

            {/* Additional product details */}
            <ul className="text-1xl">
              <li className="mb-1 flex items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-gray-700 mr-2"
                  style={{ color: "#0dd3b7" }}
                />
                Author:{" "}
                <span className="text-gray-700 font-semibold">
                  Dale Carnegie
                </span>
              </li>
              <li className="mb-1 flex items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-gray-700 mr-2"
                  style={{ color: "#0dd3b7" }}
                />
                Publisher:{" "}
                <span className="text-gray-700 font-semibold">
                  Nhà Xuất Bản Tổng hợp TP.HCM
                </span>
              </li>
              <li className="mb-1 flex items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-gray-700 mr-2"
                  style={{ color: "#0dd3b7" }}
                />
                Quantity:{" "}
                <span className="text-gray-700 font-semibold">
                  100{" "}
                </span>
              </li>
              <li className="mb-1 flex items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-gray-700 mr-2"
                  style={{ color: "#0dd3b7" }}
                />
                Page count:{" "}
                <span className="text-gray-700 font-semibold">320</span>
              </li>
            </ul>

            {/* Purchase buttons */}
            <div className="flex mt-2 mb-4">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all bg-[#DBDBDB] text-black py-2 px-4 rounded hover:opacity-75 flex items-center shadow">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Add to your cart
              </button>

              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all bg-[#DBDBDB] text-black py-2 px-4 rounded hover:opacity-75 flex items-center ml-4 shadow">
                <FontAwesomeIcon icon={faHeart} className="mr-2" /> Add to wishlist

              </button>
            </div>


          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductDetail;
