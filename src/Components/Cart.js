import React from "react";
import "../style/App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Category from "./Category";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Category />
      <div style={{ flex: 1, padding: '20px' }}>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/Home" className="nav-link">Continue shopping →</Link>
          </div>
        ) : (
          <div className="cart-page">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img className="cart-item-img" src={item.image} alt="#" />
                <div className="cart-item-info">
                  <h6>{item.title}</h6>
                  <p>{`price($) : ${item.price}`}</p>
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p>{`Subtotal : $${(item.price * item.quantity).toFixed(2)}`}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <p className="cart-total">{`Total : $${cartTotal.toFixed(2)}`}</p>
              <button className="addtocart" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;