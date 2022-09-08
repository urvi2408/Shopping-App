import React from 'react';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Product_Info from './Components/Product_Info';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Filter from './Components/Filter';
import Login from './Components/Login';
import Sort from './Components/Sort';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Home/:id" element={<Product_Info/>}/>
        <Route path="/category/:category" element={<Filter/>}/>
        <Route path="/category/:category/:id" element={<Product_Info/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/sort" element={<Sort/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
