import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/App.css";
import Header from "./Header";
import Footer from "./Footer";

function Cart() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/5`).then((Response) => {
      console.log(Response.data);
      setProduct(Response.data);
      console.log(setProduct);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="details">
        <div className="img2">
          <img alt="#" className="product_img" src={product.image} />
        </div>

        <div className="description">
          <h4>{product?.title}</h4>
          <h6>{`price($) : ${product?.price}`}</h6>
          <h4>{`category : ${product?.category}`}</h4>
          <h4>{`Description : ${product?.description}`}</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
