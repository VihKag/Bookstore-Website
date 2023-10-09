// CategoryPage.js
import React from 'react';
import ProductList from '../components/Products/ProductList';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const CategoryPage = ({ products }) => {
  const genres = ['Fiction', 'Non-fiction', 'Science', 'Mystery'];
  const authors = ['Author 1', 'Author 2', 'Author 3', 'Author 4'];

  return (
    <>
    <div className="bg-gray-200">
      <Header/>
        <div className="flex container mx-auto">
          <div className="w-1/5 bg-white max-sm:hidden">
            <h2 className="text-xl font-semibold mb-4 ml-2">Genres</h2>
            <ul>
              {genres.map((genre) => (
                <li key={genre} className="mb-2">
                  <label className="inline-flex items-center">
                    <a href='/genre' className="ml-2 link-hover transition">{genre}</a>
                  </label>
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-4 ml-2">Authors</h2>
            <ul>
              {authors.map((author) => (
                <li key={author} className="mb-2">
                  <label className="inline-flex items-center">
                    <a href='/author' className="ml-2 link-hover transition">{author}</a>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full ml-5 bg-white p-6">
            <ProductList products={products} />
          </div>
        </div>
      <Footer/>
    </div>
      
    </>
    
  );
}

export default CategoryPage;
