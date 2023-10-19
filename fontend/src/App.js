
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Category from './pages/CategoryPage'
import Cart from './components/Cart/Cart'
import ContactUs from "./components/contact/ContactUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
export default App;
