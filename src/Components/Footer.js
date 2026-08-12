import React from 'react';
import '../style/App.css';

function Footer() {
  return (
    <footer className='footer-sticky'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h4>About ShopHub</h4>
            <p>Your one-stop shopping destination for quality products.</p>
          </div>
          <div className='footer-section'>
            <h4>Quick Links</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Follow Us</h4>
            <div className='social-links'>
              <span>📘 Facebook</span>
              <span>📷 Instagram</span>
              <span>🐦 Twitter</span>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
