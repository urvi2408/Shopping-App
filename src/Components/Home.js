import React, { useState } from 'react';
import '../style/App.css';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';
import Category from './Category';

function Home() {

  const [cart] = useState([]);

  const handleclick = (product)=>{
    cart.push(product.id);
    console.log(cart);
   }

  return (
   <>
    <div className='header'><Header/></div>
    <div className='category'><Category/></div>
    <div className='product'> <Product handleclick={handleclick}/></div>
    <div className='footer'><Footer/></div>
   </>
  );
}

export default Home;

