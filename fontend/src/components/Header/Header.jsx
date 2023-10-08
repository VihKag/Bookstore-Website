import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  return (
    <header className="bg-blue-500 p-1">
      <div className="w-10/12 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="logo.png" alt="Website Logo" className="h-8 w-8" />
            <span className="ml-2 text-white text-xl font-semibold">Bookstore</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex justify-between">
              <li className="text-white hover:text-gray-300 px-1 lg:px-5 xl:px-8 min-w-max"><a href="/new-books" >New</a></li>
              <li className="text-white hover:text-gray-300 px-1 lg:px-5 xl:px-8 min-w-max"><a href="/best-sellers">Best Sellers</a></li>
              <li className="text-white hover:text-gray-300 px-1 lg:px-5 xl:px-8 min-w-max"><a href="/categories">Categories</a></li>
              <li className="text-white hover:text-gray-300 px-1 lg:px-5 xl:px-8 min-w-max"><a href="/cart">Cart</a></li>
              <li className="text-white hover:text-gray-300 px-1 lg:px-5 xl:px-8 min-w-max"><a href="/login">Login</a></li>
            </ul>
          </nav>
          
          <div className="relative pl-6">
            <button className='top-1 md:hidden text-white nav-btn absolute left-0'><FontAwesomeIcon icon="fa-solid fa-bars" style={{color: "#000000",}} /></button>
            <input type="text" placeholder="Search for books..." className="border p-0.5 rounded-lg focus:outline-none focus:border-blue-400 pl-8"/>
            <button type="submit" className="absolute left-0 -top-1 mt-2 ml-8">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#000000",}} />
            </button>
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
