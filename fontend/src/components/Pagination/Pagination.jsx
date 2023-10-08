import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Pagination = () =>{
    return(
        <>
            <nav>
                <ul className="flex items-center h-8 text-sm">
                    <li><a href="Previous()"><FontAwesomeIcon icon="fa-solid fa-angle-left" /></a></li>
                    <li><a href='/#' className='order-gray-300 hover:bg-gray-100 hover:text-gray-700 border leading-tight items-center justify-center px-3 h-8 '>1</a></li>
                    <li><a href='/#' className='order-gray-300 hover:bg-gray-100 hover:text-gray-700 border leading-tight items-center justify-center px-3 h-8 '>2</a></li>
                    <li><a href='/#' className='order-gray-300 hover:bg-gray-100 hover:text-gray-700 border leading-tight items-center justify-center px-3 h-8 '>3</a></li>
                    <li> <a href="Next()"><FontAwesomeIcon icon="fa-solid fa-angle-right" /></a></li>     
                </ul>
            </nav>
        </>
    );
}
export default Pagination;