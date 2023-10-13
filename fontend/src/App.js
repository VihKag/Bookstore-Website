
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/prodcutdetail" element={<ProductDetail />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}
export default App;
