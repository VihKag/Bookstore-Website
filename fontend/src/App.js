
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Category from './pages/CategoryPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/prodcutdetail" element={<ProductDetail />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}
export default App;
