import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  return (
    <header className="bg-blue-500 p-1">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FontAwesomeIcon icon="fa-solid fa-book" />
            <span className="ml-2 text-white text-xl font-semibold">Bookstore</span>
          </div>
          <div className="relative pl-6">
            <input type="text" placeholder="Search for books..." className="border p-0.5 rounded-lg focus:outline-none focus:border-blue-400 pl-8 xl:w-96 lg:w-80 max-sm:hidden"/>
            <button type="submit" className="sm:absolute left-0 sm:-top-1 sm:mt-2 ml-8">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#000000",}} />
            </button>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex justify-between">
              <li className="text-white hover:text-gray-300 px-1 lg:px-5 xl:px-8 min-w-max"><a href="/new-books" >New</a></li>
              <li className="text-white hover:text-gray-300 px-1 lg:px-5 xl:px-8 min-w-max"><a href="/best-sellers">Best Sellers</a></li>
              <li className="text-white hover:text-gray-300 px-1 lg:px-5 xl:px-8 min-w-max"><a href="/categories">Categories</a></li>
            </ul>
          </nav>
          
          <button className='top-1 md:hidden text-white nav-btn px-3'><FontAwesomeIcon icon="fa-solid fa-bars" style={{color: "#000000",}} /></button>
          <div className='flex'>
          <div className="text-white hover:text-gray-300 lg:px-5 px-4 min-w-max"><a href="/login"><FontAwesomeIcon icon="fa-solid fa-bell" /></a></div>
            <div className="text-white hover:text-gray-300 lg:px-5 px-4 min-w-max"><a href="/cart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></a></div>
            <div className="text-white hover:text-gray-300 lg:px-5 px-4 min-w-max"><a href="/login"><FontAwesomeIcon icon="fa-solid fa-user" /></a></div>
          </div>
        
          <div className="md:hidden">
            {/* Mobile navigation menu (e.g., a responsive hamburger menu) */}
            {/* You can add your mobile navigation UI here */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
