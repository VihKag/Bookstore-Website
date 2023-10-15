
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Category from './pages/CategoryPage'
<<<<<<< HEAD
import ContactUs from "./components/contact/ContactUs";
=======
>>>>>>> 9f27bd5d94b3319dc7d306af750baa15fd7d4ad7
function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/prodcutdetail" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
=======
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/prodcutdetail" element={<ProductDetail />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
>>>>>>> 9f27bd5d94b3319dc7d306af750baa15fd7d4ad7
      </Routes>
    </Router>
  );
}
export default App;
