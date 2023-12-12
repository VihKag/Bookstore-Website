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
import TermPage from "./pages/TermPage";
import PrivacyPage from "./pages/PrivacyPage";
import SecurityPage from "./pages/SecurityPage";
import AdminRoute from "./routes/Admin.js";
import UserProfile from "./components/User/UserProfile";
import { CartProvider } from "../../frontend/src/components/Cart/CartContext.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
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
            <Route path="/terms" element={<TermPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/admin/*" element={<AdminRoute />} />
            <Route path="/user/:activepage" element={<UserProfile />} />
          </Routes>
      </CartProvider>
    </Router>
  );
}
export default App;
