import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllCatagory from './AllCatagory';
import Cart from './Cart';
import Home from './Home';
import IndivisualProduct from './IndivisualProduct';
import Products from './Products';
import ErrorComponents from '../Components/Comp';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthcare" element={<AllCatagory />} />
          <Route path="/healthcare/products" element={<Products />} />
          <Route
            path="/healthcare/products/:id"
            element={<IndivisualProduct />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorComponents />} />
        </Routes>
      
    </div>
  );
}

export default AllRoutes