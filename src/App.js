import React from 'react';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Product_Info from './Components/Product_Info';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filter from './Components/Filter';
import Login from './Components/Login';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Home/:id" element={<Product_Info />} />
              <Route path="/category/:category" element={<Filter />} />
              <Route path="/category/:category/:id" element={<Product_Info />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
