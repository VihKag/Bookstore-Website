//git// CategoryPage.js
import React from "react";
import ProductList from "../components/Products/ProductList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import banner1 from "../assets/banner/banner1.jpg";
// import banner2 from "../assets/banner/banner2.png";
import CarouselSlider from "../components/Carousel/Carousel";
const CategoryPage = ({ products }) => {
  const genres = ["Fiction", "Non-fiction", "Science", "Mystery"];
  const authors = ["Author 1", "Author 2", "Author 3", "Author 4ffffff"];
  return (
    <>
      <div className="bg-gray-200">
        <Header />
        <div className="flex container mx-auto">
          <div className=" bg-white max-sm:hidden rounded-md lg:pr:16 md:pr-10 min-w-max">
            <h2 className="text-xl font-semibold m-1.5">Genres</h2>
            <ul>
              {genres.map((genre) => (
                <li key={genre} className="mb-2">
                  <label className="inline-flex items-center">
                    <a href="/genre" className="mx-2 link-hover transition">
                      {genre}
                    </a>
                  </label>
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2 ml-2">Authors</h2>
            <ul>
              {authors.map((author) => (
                <li key={author} className="mb-2">
                  <label className="inline-flex items-center">
                    <a href="/author" className="mx-2 link-hover transition">
                      {author}
                    </a>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ml-5">
              <div className="mb-2">
                <CarouselSlider/>
              </div>
              
              <div className="flex justify-center">
                <select
                  id="Category"
                  className="border text-sm rounded-md bg-white w-full p-2 mb-2 max-w-max"
                >
                  <option selected>Genres</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="Category"
                  className="border text-sm rounded-md bg-white w-full p-2 mb-2 max-w-max ml-3"
                >
                  <option selected>Year</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="Category"
                  className="border text-sm rounded-md bg-white w-full p-2 mb-2 max-w-max ml-3"
                >
                  <option selected>Author</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="Category"
                  className="border text-sm rounded-md bg-white w-full p-2 mb-2 max-w-max ml-3"
                >
                  <option selected>Quantity</option>
                  <option value="US">8</option>
                  <option value="CA">16</option>
                </select>
                <button className="border text-sm rounded-md bg-white p-2 mb-2 max-w-max ml-3">
                  Filter
                </button>
              </div>
              <div className="w-full bg-white p-6 rounded-md">
                <ProductList products={products} />
              </div>
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CategoryPage;
