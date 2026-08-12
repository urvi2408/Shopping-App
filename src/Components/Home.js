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
   <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header/>
    <div style={{ flex: 1 }}>
      <Category/>
      <Product handleclick={handleclick}/>
    </div>
    <Footer/>
   </div>
  );
}

export default Home;

