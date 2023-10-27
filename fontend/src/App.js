import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Category from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./components/contact/ContactPage";
import Product from "./pages/Product";
import WishlistPage from "./pages/WishlistPage";
import Cart from "./components/Cart/Cart";
import Testimonial from "./pages/Testimonial";
import Rating2 from "./components/rating2/rating2";
import ReviewArticle from "./components/rating2/review";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/rate" element={<Rating2 />} />
        <Route path="/review" element={<ReviewArticle />} />
      </Routes>
    </Router>
  );
}
export default App;
