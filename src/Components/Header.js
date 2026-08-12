import React from 'react';
import '../style/App.css';
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { cartCount, clearCart } = useCart();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    clearCart();
    navigate("/login");
  };

  return (
    <header className='header-sticky'>
      <div className='header-container'>
        <div className='logo'>
          <Link to="/Home" style={{ textDecoration: 'none' }}>
            <h1>🛒 ShopHub</h1>
          </Link>
        </div>
        <nav className='nav-menu'>
          <Link to="/Home" className='nav-link'>Home</Link>
          <Link to="/cart" className='nav-link cart-link'>
            <button className='cart-btn'>
              🛍️ Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </Link>
          <button className='cart-btn' onClick={handleLogout}>Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;