import Pagination from "../Pagination/Pagination";
import ProductCard from "./Productcard";
const ProductList = () =>{
    return(
        <>
            <div className="flex flex-wrap w-10/12 mx-auto">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />               
            </div>  
            <div className="w-10/12 mx-auto justify-center flex">
                <Pagination/>
            </div>
        </>
    );
}
export default ProductList;