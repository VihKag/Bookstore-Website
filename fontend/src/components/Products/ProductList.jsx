import Pagination from "../Pagination/Pagination";
import ProductCard from "./Productcard";
const ProductList = () =>{
    return(
        <>
            <div className="flex flex-wrap">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />               
            </div>  
            <div className="mx-auto justify-center flex">
                <Pagination/>
            </div>
        </>
    );
}
export default ProductList;