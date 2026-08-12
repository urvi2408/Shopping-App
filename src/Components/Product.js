import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../style/App.css';
import { useCart } from '../context/CartContext';

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading-text">Loading products...</p>;

  return (
    <div className='product_container'>
      {
        data && data.length > 0 &&
        data.map((product) => (
          <div className='card' key={product.id}>
            <div>
              <Link to={`${product.id}`}>
                <img id={product.id} className='img' src={product?.image} alt="#" />
              </Link>
            </div>
            <div className='card_info'>
              <h6>{product?.title}</h6>
              <h6>{`price($) : ${product?.price}`}</h6>
              <h6>{`category : ${product?.category}`}</h6>
              <button onClick={() => addToCart(product)} className='addtocart'>
                ADD TO CART
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Product;