import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useMemo } from "react";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../../components/Pagination/Pagination";
import { get } from "../../../utils/ApiUtils";
import { API_BOOK} from "../../../api/Api";
import { requestSort, sortData } from '../../../utils/sortUtils';
import { NavLink } from "react-router-dom";
const Products = () => {
  const columns = [
    { label: "ISBN", value: "isbn" },
    { label: "BOOK", value: "name" },
    { label: "CATEGORY", value: "categoryList" },
    { label: "AUTHOR", value: "authorList" },
    { label: "PUBLISHER", value: "publisherList" },
    { label: "QUANTITY", value: "quantity" },
    { label: "PRICE", value: "price" },
    { label: "STATE", value: "state" },
  ];
  const API_URL = API_BOOK.crudBook + "/admin";
  
  const [state, setState] = useState({
    products: [],
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    sortConfig: {
      key: '',
      direction: '',
    },
  });

  const handlePageChange = (newPage) => {
    setState((prevState) => ({
      ...prevState,
      currentPage: newPage,
    }));
  };

  const handleSort = (key) => {
    requestSort(key, state.sortConfig, (newSortConfig) => {
      setState((prevState) => ({
        ...prevState,
        sortConfig: newSortConfig,
      }));
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(
          `${API_URL}?pageNumber=${state.currentPage}&pageSize=${state.pageSize}`
        );

        setState((prevState) => ({
          ...prevState,
          products: response.content,
          totalPages: response.totalPages,
        }));
      } catch (e) {
        console.error("Error fetching data from API:", e);
      }
    };

    fetchData();
  }, [state.currentPage, state.pageSize]);

  const sortedProducts = useMemo(() => {
    return sortData(state.products, state.sortConfig);
  }, [state.products, state.sortConfig]);
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((data, index) => (
                <th key={index} scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    {data.label}
                    <button onClick={() => handleSort(`${data.value}`)}>
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
              ))}
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product, index) => (
              <tr key={index} class="bg-white border-b text-gray-700 text-lg">
                <td class="px-6 py-4">{product.isbn}</td>
                <td class="px-6 py-4">{product.name}</td>
                <td class="px-6 py-4">
                  {product.categoryList.join(", ")}
                </td>
                <td class="px-6 py-4">
                  {product.authorList.join(", ")}
                </td>
                <td class="px-6 py-4">
                  {product.publisherList.join(", ")}
                </td>
                <td class="px-6 py-4">{product.quantity}</td>
                <td class="px-6 py-4">{product.price}</td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-center">
                    <div class={`h-4 w-4 rounded-full ${product.state ? 'bg-green-400' : 'bg-red-400'} me-2`}></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex">
                  <NavLink
                    to={`${product.productId}`}
                    className="mx-2 font-medium text-blue-600"
                  >
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      style={{ color: "#ff9b00" }}
                      size="lg"
                    />
                  </NavLink>
                  <a href="/#" className="mx-2 font-medium text-blue-600">
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "#ff0000" }}
                      size="lg"
                    />
                  </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <Pagination
            totalPages={state.totalPages}
            currentPage={state.currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
export default Products;
