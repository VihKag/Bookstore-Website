import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.png";
import banner4 from "../assets/banner/banner4.png";
import banner5 from "../assets/banner/banner5.png";
import Carousel from "../components/Carousel/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgBook from '../assets/books/03.jpg';
import Footer2 from "../components/Footer/footer2";
import BookContainer from "../components/Container/BookContainer";
import AuthorList from "../components/Other/AuthorList";
import FeaturedBook from "../components/Other/FeatureBook";
const Home = () => {
  const [cartItemCount] = useState(0);

  const icontab = [
    { label: 'Discounts', img: './path' },
    { label: 'Cashback', img: './path' },
    { label: 'Payment', img: './path' },
    { label: 'Payment', img: './path' },
    { label: 'Payment', img: './path' },
    { label: 'Payment', img: './path' },
  ];
  const books = [
    {
      title: "Sách 1",
      author: "Tác giả 1",
      genre: "Thể loại 1",
      year: 2020,
      imgBook: imgBook,
    },
    {
      title: "Sách 2",
      author: "Tác giả 2",
      genre: "Thể loại 2",
      year: 2018,
      imgBook: imgBook,
    },
    {
      title: "Sách 3",
      author: "Tác giả 3",
      genre: "Thể loại 1",
      year: 2021,
      imgBook: imgBook,
    },
    {
      title: "Sách 4",
      author: "Tác giả 4",
      genre: "Thể loại 3",
      year: 2019,
      imgBook: imgBook,
    },
    {
      title: "Sách 1",
      author: "Tác giả 1",
      genre: "Thể loại 1",
      year: 2020,
      imgBook: imgBook,
    },
    {
      title: "Sách 2",
      author: "Tác giả 2",
      genre: "Thể loại 2",
      year: 2018,
      imgBook: imgBook,
    },
    {
      title: "Sách 3",
      author: "Tác giả 3",
      genre: "Thể loại 1",
      year: 2021,
      imgBook: imgBook,
    },
    {
      title: "Sách 4",
      author: "Tác giả 4",
      genre: "Thể loại 3",
      year: 2019,
      imgBook: imgBook,
    },
    {
      title: "Sách 3",
      author: "Tác giả 3",
      genre: "Thể loại 1",
      year: 2021,
      imgBook: imgBook,
    },
    {
      title: "Sách 4",
      author: "Tác giả 4",
      genre: "Thể loại 3",
      year: 2019,
      imgBook: imgBook,
    },
  ];

  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <div className="mx-auto container h-full">
        <div className="homebanner">
          <div className="hidden sm:flex mb-2 mt-2">
            <div className="col-1-4 mr-2">
              <img src={banner1} alt="../assets/banner/banner2.jpg" className="rounded-md" />
            </div>
            <div className="col-1-4 mr-2">
              <img src={banner2} alt="../assets/banner/banner2.png" className="rounded-md" />
            </div>
            <div className="col-1-4 mr-2">
              <img src={banner4} alt="../assets/banner/banner4.png" className="rounded-md" />
            </div>
            <div className="col-1-4">
              <img src={banner5} alt="../assets/banner/banner5.png" className="rounded-md" />
            </div>
          </div>
        </div>
        <Carousel />

        <div className="mt-5 flex justify-between flex-wrap">
          {icontab.map((item, index) => (
            <div key={index} className="col-1-6">
              <div className="text-4xl lg:text-5xl w-full flex justify-center"><FontAwesomeIcon icon="fa-solid fa-receipt" style={{ color: "#ca1c1c", }} /></div>
              <div className="max-w-max mx-auto">{item.label}</div>
            </div>
          ))}
        </div>
        <BookContainer list={books} category="XU HƯỚNG" />
        <div className="flex justify-between flex-wrap w-full space-x-4">
          <AuthorList />
          <FeaturedBook />
        </div>
      </div>

      <Footer />
      <Footer2 />
    </>
  );
};
export default Home;
