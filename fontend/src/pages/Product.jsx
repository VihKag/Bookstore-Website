import React from "react";
import Header from "../components/Header/Header";
import ProductDetail from "../components/Products/ProductDetail";
import Rating from "../components/rating/Rating";
import Detail from "../components/Products/Detail";
import Footer from "../components/Footer/Footer";
import Rating2 from "../components/rating2/rating2";
import ReviewArticle from "../components/rating2/review";
import Breadcrumb from "../components/Other/Breadcrumb";
const Product = () => {
    return (
        <div >
            <Header />
            <Breadcrumb />
            <ProductDetail />
            <Detail />
            <Rating2 />
            <ReviewArticle />
            <Rating />
            <Footer />
        </div>


    )
}
export default Product;