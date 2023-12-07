import React, { useState } from "react";
import Header from "../components/Header/Header";
import ProductDetail from "../components/Products/ProductDetail";
import Rating from "../components/rating/Rating";
import Footer from "../components/Footer/Footer";
import Rating2 from "../components/rating/rating2";
import ReviewArticle from "../components/rating/review";
import Breadcrumb from "../components/Other/Breadcrumb";
const Product = () => {
    const [cartItemCount] = useState(0);

    return (
        <div >
            <Header cartItemCount={cartItemCount} />
            <Breadcrumb />
            <ProductDetail />
            <Rating2 />
            <ReviewArticle />
            <Rating />
            <Footer />
        </div>


    )
}
export default Product;