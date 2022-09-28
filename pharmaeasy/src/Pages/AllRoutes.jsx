import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllCatagory from './AllCatagory';
import Cart from './Cart';
import ErrorComponents from './ErrorComponents';
import Home from './Home';
import IndividualProduct from './IndividualProduct';
import Products from './Products';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthcare" element={<AllCatagory />} />
          <Route path="/healthcare/products" element={<Products />} />
          <Route
            path="/healthcare/products/:id"
            element={<IndividualProduct />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorComponents />} />
        </Routes>
      
    </div>
  );
}

export default AllRoutes