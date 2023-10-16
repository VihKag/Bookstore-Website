import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import banner1 from "../assets/banner/banner1.jpg";
import Carousel from "../components/Carousel/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
  const icontab = [
    {label: 'Discounts', img: './path'},
    {label: 'Cashback', img: './path'},
    {label: 'Payment', img: './path'},
    {label: 'Payment', img: './path'},
    {label: 'Payment', img: './path'},
    {label: 'Payment', img: './path'},
    {label: 'Payment', img: './path'},
    {label: 'Payment', img: './path'}
  ];
  return (
    <>
      <Header />      
      <div className="container mx-auto">     
        <div className="homebanner">
          <Carousel/>
          <div className="hidden sm:flex mb-5 mt-2">
            <div className="col-1-4">
              <img src={banner1} alt="../assets/banner/banner1.jpg" className="rounded-md" />
            </div>
            <div className="col-1-4">
              <img src={banner1} alt="../assets/banner/banner1.jpg" className="rounded-md" />
            </div>
            <div className="col-1-4">
              <img src={banner1} alt="../assets/banner/banner1.jpg" className="rounded-md" />
            </div>
            <div className="col-1-4">
              <img src={banner1} alt="../assets/banner/banner1.jpg" className="rounded-md" />
            </div>
          </div>
        </div>  

        <div className="flex justify-between flex-wrap">
          {icontab.map((item,index)=>(
            <div key={index} className="w-1/4 md:col-1-8">
              <div className="text-4xl lg:text-5xl w-full flex justify-center"><FontAwesomeIcon icon="fa-solid fa-receipt" style={{color: "#ca1c1c",}} /></div>
              <div className="max-w-max mx-auto">{item.label}</div>
          </div>  
          ))}      
        </div>

        <div className="Category-display my-4">
          <div className="Category-header bg-green-300">
            <div className="inline-block m-2 text-2xl font-medium">
            <FontAwesomeIcon icon="fa-solid fa-fire" size="xl" style={{color: "#ff0000",}} />
              <span className="ml-2">XU HƯỚNG MUA SÁCH</span>
            </div>
          </div>
          <div className="Category-tab">              
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
          <div className="tab-product"></div>            
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
