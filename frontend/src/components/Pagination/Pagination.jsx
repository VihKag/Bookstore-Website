import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Pagination = () => {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="/back"
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg"
            >
              <FontAwesomeIcon icon="fa-solid fa-angle-left" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Pagination;
