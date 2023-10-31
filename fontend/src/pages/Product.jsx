import React from "react";
import Header from "../components/Header/Header";
import ProductDetail from "../components/Products/ProductDetail";
import Rating from "../components/rating/Rating";
import Detail from "../components/Products/Detail";
import Footer from "../components/Footer/Footer";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Rating2 from "../components/rating2/rating2";
import ReviewArticle from "../components/rating2/review";
const Product = () => {
    return (
        <div >
            <Header />
            <ProductDetail />
            <ProductSlider/>
            <Detail/>
            <Rating2/>
            <ReviewArticle/>
            <Rating/>
            <Footer />
        </div>
        

    )
}
export default Product;