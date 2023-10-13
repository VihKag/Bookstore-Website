import React, { useState, useEffect } from "react";

function ProductDetail() {
  const [imgId, setImgId] = useState(1);

  useEffect(() => {
    // Ensure DOM is fully loaded before accessing elements
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    )?.clientWidth;

    if (displayWidth) {
      slideImage(displayWidth);
    }
  }, [imgId]);

  function slideImage(displayWidth) {
    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-screen-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left section */}
          <div className="img-display overflow-hidden">
            <div className="img-showcase flex transition-all duration-500 ease">
              {/* Your images go here */}
            </div>
          </div>
          {/* Right section */}
          <div className="flex flex-col">
            {/* Product details */}
            <h2 className="text-3xl font-bold mb-4">nike shoes</h2>
            <a
              href="#"
              className="uppercase text-sm font-semibold mb-2 bg-blue-500 text-white py-1 px-2 rounded inline-block transition duration-500 ease hover:opacity-75"
            >
              Visit Nike Store
            </a>
            {/* Product rating */}
            <div className="flex items-center mb-4">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star-half-alt text-yellow-500"></i>
              <span className="ml-2 text-gray-700">4.7(21)</span>
            </div>
            {/* Product price */}
            <div className="mb-4">
              <p className="text-sm">
                Old Price: <span className="text-red-500">$257.00</span>
              </p>
              <p className="text-sm">
                New Price: <span className="text-blue-500">$249.00 (5%)</span>
              </p>
            </div>
            {/* Product description */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">About this item:</h2>
              <p className="text-sm text-gray-700 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eveniet veniam tempora fuga tenetur...
              </p>
              {/* Additional product details */}
              <ul className="text-sm">
                <li className="mb-1 flex items-center">
                  Color:{" "}
                  <span className="ml-2 text-gray-700 font-semibold">
                    Black
                  </span>
                </li>
                <li className="mb-1 flex items-center">
                  Available:{" "}
                  <span className="ml-2 text-gray-700 font-semibold">
                    in stock
                  </span>
                </li>
                <li className="mb-1 flex items-center">
                  Category:{" "}
                  <span className="ml-2 text-gray-700 font-semibold">
                    Shoes
                  </span>
                </li>
                <li className="mb-1 flex items-center">
                  Shipping Area:{" "}
                  <span className="ml-2 text-gray-700 font-semibold">
                    All over the world
                  </span>
                </li>
                <li className="mb-1 flex items-center">
                  Shipping Fee:{" "}
                  <span className="ml-2 text-gray-700 font-semibold">Free</span>
                </li>
              </ul>
            </div>
            {/* Purchase buttons */}
            <div className="flex mb-4">
              <input
                type="number"
                min="0"
                value="1"
                className="border border-gray-300 rounded-l py-2 px-4"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-r hover:opacity-75">
                Add to Cart <i className="fas fa-shopping-cart ml-2"></i>
              </button>
            </div>
            <div className="flex mb-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:opacity-75">
                Compare
              </button>
            </div>
            {/* Social links */}
            <div className="flex items-center">
              <p className="mr-2">Share At:</p>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 border border-gray-700 rounded-full text-sm transition duration-500 ease hover:bg-black hover:border-transparent hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* Add other social icons similarly */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
