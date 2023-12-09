import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logodb from '../../assets/image/bookicon.png';
import { Link, Outlet } from "react-router-dom";
import { faBook, faCartShopping,faCirclePlus, faUser, faUserPlus, faUserTie, faUsers } from "@fortawesome/free-solid-svg-icons";
const DashboardNav = () => {
  const userProfile = { name: "Khang", email: "Khang@gmail.com" };
  const btnUser = [
    { name: "Customers", link: "/admin/customers", icon: <FontAwesomeIcon icon={faUsers} /> },
    { name: "Staffs", link: "/admin/staffs", icon: <FontAwesomeIcon icon={faUserTie} /> },
    { name: "Add account", link: "/admin/add_account", icon: <FontAwesomeIcon icon={faUserPlus} /> },
  ];
  const btnProduct = [
    { name: "Products", link: "/admin/products", icon: <FontAwesomeIcon icon={faBook} /> },
    { name: "Add Product", link: "/admin/add_product", icon: <FontAwesomeIcon icon={faCirclePlus} /> },
  ];
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/admin/profile" className="flex ml-2 md:mr-24">
                <img src={logodb} className="h-8 mr-3" alt="Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  PKQ Bookstore
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="relative inline-flex items-center p-2 text-sm font-medium text-center mr-2"
              >
                <Link to="/" className="flex text-sm">
                  <FontAwesomeIcon icon="fa-solid fa-bell" className="w-6 h-6" />
                  <span className="sr-only">Cart</span>
                </Link>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-red-500 rounded-full -top-1 -end-1 dark:border-gray-900">
                  20
                </div>
              </button>
              <button
                type="button"
                className="relative inline-flex items-center p-2 text-sm font-medium text-center"
              >
                <Link to="/" className="flex text-sm">
                  <FontAwesomeIcon icon="fa-solid fa-message" className="w-6 h-6" />
                  <span className="sr-only">Cart</span>
                </Link>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-red-500 rounded-full -top-1 -end-1 dark:border-gray-900">
                  10
                </div>
              </button>
              <div className="flex items-center ml-3">
                <div>
                 
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user logo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      {userProfile.name}
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      {userProfile.email}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="/admin/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Profile
                      </a>
                    </li>
                    <li>

                    </li>
                    <li>
                      <a
                        href="/#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/admin"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
              >
                <FontAwesomeIcon icon="fa-solid fa-gauge-high" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/category"
                relative="path"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
              >
                <FontAwesomeIcon icon="fa-solid fa-list" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Categories
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/user"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
              >
                <FontAwesomeIcon icon="fa-solid fa-users" />
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/createaccount"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
              >
                <FontAwesomeIcon icon="user-plus" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Create Account
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/invoices"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100  group"
              >
                <FontAwesomeIcon icon="fa-solid fa-file-circle-plus" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Invoices
                </span>
              </Link>
            </li>

            <div id="accordion-flush" data-accordion="collapse" className="items-center text-gray-900 rounded-lg transition-all" data-inactive-classes="text-gray-900">
              <h2 id="accordion-flush-heading-2">
                <button type="button" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 focus:bg-gray-200 group w-full justify-between" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                  <div>
                    <FontAwesomeIcon icon={faCartShopping} className="mr-4" />
                    <span>Product</span>
                  </div>
                  <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <ul className="hidden" id="accordion-flush-body-2">
                {btnProduct.map((btn, index) => (
                  <li key={index}>
                    <Link
                      to={btn.link}
                      className="flex items-center p-2 my-2 mx-2 text-gray-900 rounded-lg hover:bg-gray-100 focus:bg-gray-200"
                    >
                      {btn.icon}
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        {btn.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div id="accordion-flush" data-accordion="collapse" className="items-center text-gray-900 rounded-lg transition-all" data-inactive-classes="text-gray-900">
              <h2 id="accordion-flush-heading-1">
                <button type="button" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 focus:bg-gray-200 group w-full justify-between" data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
                  <div>
                    <FontAwesomeIcon icon={faUser} className="mr-4" />
                    <span>User</span>
                  </div>
                  <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <ul className="hidden" id="accordion-flush-body-1">
                {btnUser.map((btn, index) => (
                  <li key={index}>
                    <Link
                      to={btn.link}
                      className="flex items-center p-2 my-2 mx-2 text-gray-900 rounded-lg hover:bg-gray-100 focus:bg-gray-200"
                    >
                      {btn.icon}
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        {btn.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <li>
              <Link
                to="/#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
              >
                <FontAwesomeIcon icon="sign-out-alt" />

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Sign out
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 rounded-lg mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default DashboardNav;
