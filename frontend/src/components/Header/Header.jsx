import React, { useState } from 'react';
import logoPNG from '../../assets/image/bookicon.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from "../SearchBar/SearchBar"
import BookData from "../../Data.json"
import avatar from '../../assets/image/phuc.png'
const Header = ({ cartItemCount }) => {
  const [showDataResult, setShowDataResult] = useState(false);

  return (
    <>
      <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <Link to="/"><img src={logoPNG} alt="Logo" className="w-12 h-12 mr-2" /></Link>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white ml-2 ">PKQ Bookstore</span>
          </a>

          <div className="flex items-center md:order-2">
            <div className="mr-10 md:ml-0">
              {/* Wrap SearchBar and data result with a container */}
              <div className="searchInputs dataResultContainer">
                <SearchBar
                  placeholder="Type to search..."
                  data={BookData}
                  onDataResultVisible={setShowDataResult}
                />
                {showDataResult && (
                  <div className="dataResult">

                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center mr-5"
            >
              <Link to="/cart" className="flex text-sm">
                <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
                <span className="sr-only">Cart</span>
              </Link>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-red-500 rounded-full -top-1 -end-1 dark:border-gray-900">
                {cartItemCount}
              </div>
            </button>
            <a href="/wishlist" className="flex mr-6 text-sm" id="wishlist-button">
              <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
            </a>

            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img class="w-8 h-8 rounded-full" src={avatar} alt="user logo" />
            </button>
            <div className="z-50 hidden my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 mt-4">
                <span className="block text-sm text-gray-900 dark:text-white">Khang Nguyễn</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">Khang191@gmail.com</span>
              </div>

              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="/user/accountsettings" className="block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <FontAwesomeIcon icon={["fas", "user"]} className="mr-2" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="/user/yourorders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <FontAwesomeIcon icon={["fas", "list"]} className="mr-2" />
                    Orders
                  </a>
                </li>
                <li>
                  <a href="/payment" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <FontAwesomeIcon icon={["fas", "credit-card"]} className="mr-2" />
                    Payment
                  </a>
                </li>
                <li>
                  <a href="/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <FontAwesomeIcon icon={["fas", "sign-out-alt"]} className="mr-2" />
                    Sign out
                  </a>
                </li>
              </ul>

            </div>

            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/#" className="block py-2 pl-3 pr-4 text-white bg-[#0dd3b7] rounded md:bg-transparent md:text-[#0dd3b7] md:p-0 md:dark:text-[#0dd3b7]" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0dd3b7] md:p-0 dark:text-white md:dark:hover:text-[#0dd3b7] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="/service" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0dd3b7] md:p-0 dark:text-white md:dark:hover:text-[#0dd3b7] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0dd3b7] md:p-0 dark:text-white md:dark:hover:text-[#0dd3b7] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>

          </div>

        </div>
      </nav>

    </>

  );
}

export default Header;
