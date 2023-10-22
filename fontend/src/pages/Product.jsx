import React from "react";
import Header from "../components/Header/Header";
import ProductDetail from "../components/Products/ProductDetail";
import Rating from "../components/rating/Rating";
import Detail from "../components/Products/Detail";
import Footer from "../components/Footer/Footer";
const Product = () => {
    return (
        <div >
            <Header />
            <ProductDetail />
            <Detail/>
            <Rating/>
            <Footer />
        </div>
        

    )
}
export default Product;