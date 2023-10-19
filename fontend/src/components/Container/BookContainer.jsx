import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
const BookContainer = ({list,category,img})=>{
    return(
        <>
        <div className="Category-display my-4">
          <div className="Category-header bg-green-300">
            <div className="inline-block m-2 text-2xl font-semibold">
                <FontAwesomeIcon icon="fa-solid fa-fire" size="xl" style={{color: "#ff0000",}} />
              <span className="ml-2">{category}</span>
            </div>
          </div>
          <div className="Category-tab m-2">              
            <ul className="flex flex-wrap text-md font-medium text-center text-black">
              <li class="mr-5">
                   <a href="/#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 tabhome-btn">Category 1</a>
              </li>
              <li className="mr-5">
                  <a href="/#"  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 tabhome-btn">Category </a>                </li>
              <li className="mr-5">
                  <a href="/#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 tabhome-btn">Category 3</a>
              </li>
              <li className="mr-5">
                  <a href="/#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 tabhome-btn">Category 4</a>
              </li>
            </ul>
          </div>
          <div className="tab-product flex flex-wrap justify-between">
            {list.map((item,index)=>(
              <div key={index} class="col-2-11 my-2 bg-white border border-gray-200 rounded-lg shadow">
                <a href="/#">
                    <img class="p-8 rounded-t-lg" src={item.imgBook} alt="product" />
                </a>
                <div class="px-5 pb-5">
                    <a href="/#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">{item.title}</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                    <svg class="w-4 h-4 text-yellow-300 mr-1">
                          <FontAwesomeIcon icon="fa-solid fa-star"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 mr-1">
                          <FontAwesomeIcon icon="fa-solid fa-star"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 mr-1">
                          <FontAwesomeIcon icon="fa-solid fa-star"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 mr-1">
                          <FontAwesomeIcon icon="fa-solid fa-star"/>
                        </svg>
                        <svg class="w-4 h-4 text-gray-400">
                          <FontAwesomeIcon icon="fa-solid fa-star"/>
                        </svg>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="lg:text-3xl md:text-2xl sm:text-xl font-bold text-gray-900">$599</span>
                        <a href="/#" class="text-white min-w-max bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-sm px-5 py-2.5 text-center max-md:hidden">+ <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{color: "#ff0000",}} /></a>
                    </div>
                </div>
              </div>
            ))}
          </div>            
        </div>
        </>
    )
}
export default BookContainer;