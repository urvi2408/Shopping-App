import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../style/App.css";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import Category from "./Category";

const Filter = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Category />
        {loading && <p className="loading-text">Loading...</p>}
        <div className="product_container">
          {!loading && data && data.length > 0 &&
            data.map((product) => (
              <div className="card" key={product.id}>
                <div>
                  <Link to={`${product.id}`}>
                    <img id={product.id} className="img" src={product?.image} alt="#" />
                  </Link>
                </div>
                <div className="card_info">
                  <h6>{product?.title}</h6>
                  <h6>{`price($) : ${product?.price}`}</h6>
                  <h6>{`category : ${product?.category}`}</h6>
                  <button onClick={() => addToCart(product)} className="addtocart">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Filter;