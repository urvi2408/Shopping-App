import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import '../style/App.css';
import { useCart } from '../context/CartContext';
import Category from './Category';

function Product_Info() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return (<><Header /><p className="loading-text">Loading...</p></>);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Category />
      <div style={{ flex: 1, padding: '20px' }}>
        <div className='details'>
          <div className='img2'>
            <img alt="#" className='product_img' src={product?.image} />
          </div>
          <div className='description'>
            <h4>{product?.title}</h4>
            <h4>{`price($) : ${product?.price}`}</h4>
            <h4>{`category : ${product?.category}`}</h4>
            <h4>{`Description : ${product?.description}`}</h4>
            <button onClick={() => addToCart(product)} className='addtocart'>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product_Info;