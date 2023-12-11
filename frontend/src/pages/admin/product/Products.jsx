import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState,useMemo } from 'react';
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../../components/Pagination/Pagination";
import { requestSort, sortData } from '../../../utils/sortUtils';
import {get} from '../../../utils/ApiUtils';
import { API_BOOK } from "../../../api/Api";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [usePage,setPage]= useState({
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
});  
  const [sortConfig, setSortConfig] = useState({
    key: '',
    direction: '',
  });
  useEffect(() =>{
    const fetchData = async(page)=>{
      try {
          const response = await get(API_BOOK.crudBook + `/admin/?page=${usePage.currentPage}`);
          setProducts(response.content);
          console.log(response.content);
          const filteredData = filterData(products, searchTerm, selectedCategory);
          setFilteredProducts(filteredData);
          const pageInfor = {
            totalPages: response.totalPages,
            currentPage: response.number,
            pageSize: response.size,
          }
          setPage(pageInfor);
      }catch(e) {
          console.error('Lỗi trong quá trình lấy dữ liệu từ API:', e);
      }
    } 
    fetchData(usePage.currentPage);
  },[usePage.currentPage,searchTerm, selectedCategory,products])
  const handlePageChange = (newPage) => {
    setPage({
      ...usePage,
      currentPage: newPage,
    });
  };
  const handleSort = (key) => {
    requestSort(key, sortConfig, setSortConfig);
  };
  //Sort row in table
  const sortedProducts = useMemo(() => {
    return sortData(filteredProducts, sortConfig);
  }, [filteredProducts , sortConfig]);
  const filterData = (data, searchTerm, selectedCategory) => {
    if (!searchTerm && selectedCategory==='') {
      return data;
    }
    const filtered = data.filter(product =>
      (searchTerm && product.productName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (selectedCategory && product.category === selectedCategory)
    );
  
    return filtered;
  };
  return (
    <>
      <div className="flex items-center justify-between mb-4\">
        <div class="bg-white my-auto">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center">
        <select 
              className="block w-52 h-10 mx-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 my-auto"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}>                
                <option value=''>Choose category</option>
                {category.map((item, index) => (
                      <option key={index} 
                        value={item.categoryName}
                        >
                        {item.categoryName}
                      </option>
                ))}

            </select>
        </div>
        
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center justify-center">
                  ID
                  <button onClick={() => handleSort('productId')}>
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </button>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                  Productname
                  <button onClick={() => handleSort('productName')}>
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </button>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center justify-center">
                  Author
                  <a href="/#">
                    <svg
                      class="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center justify-center">
                  Category
                  <button onClick={() => handleSort('category')}>
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </button>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center justify-center">
                  Quantity
                  <button onClick={() => handleSort('brand')}>
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </button>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center justify-center">
                  Price
                  <button onClick={() => handleSort('stockStatus')}>
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </button>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product,index) => (
              <tr key={index} class="bg-white border-b text-gray-700 text-lg">
                <td class="px-6 py-4 text-center">{product.id}</td>
                <th
                  scope="row"
                  class="text-center px-6 flex py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={product.image}
                    alt="Jese"
                  />
                  <div className="pl-3">
                    <div className="font-semibold">{product.name}</div>
                  </div>
                </th>
                <td class="px-6 py-4 text-center">{product.color}</td>
                <td class="px-6 py-4 text-center">{product.category}</td>
                <td class="px-6 py-4 text-center">{product.quantity}</td>
                <td class="px-6 py-4 text-center">{product.price}</td>
                <td className="px-6 py-4">
                  <NavLink to={`${product.productId}`} className="mx-2 font-medium text-blue-600">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      style={{ color: "#ff9b00" }}
                    />
                  </NavLink>
                  <a href="/#" className="mx-2 font-medium text-blue-600">
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "#ff0000" }}
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center"><Pagination
                    totalPages={usePage.totalPages}
                    currentPage={usePage.currentPage}
                    onPageChange={handlePageChange}
                /></div>        
      </div>
    </>
  );
};
export default Products;
