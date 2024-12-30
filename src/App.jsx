import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import ProductDetail from "./Components/ProductDetail"
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import AllProducts from "./Components/AllProducts";
import { AuthContext } from "./Context/AuthContext";
// import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { Pagination } from "antd";
import {} from "./Components/Navbar"
// import  auth  from './Navbar';


import Cart from "./pages/Cart";
import { div } from "framer-motion/m";
import Dashboard from "./Admin/Dashboard";

function App() {

  
  return (
    
    
    
    
    
    
    
    <BrowserRouter>
    
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      {/* <Route path="/Products" element={<Products/>}/> */}
      {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
      <Route path="/" element={<AllProducts/>}></Route>
        <Route path="/Products/:id" element={<ProductDetail />}></Route>
       <Route path="/Cart" element={<Cart/>}/>  
      <Route path="/Signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      



    </Routes>
  </BrowserRouter>
    
  

       
    
  
  )
}

export default App;
