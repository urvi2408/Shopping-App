import React from 'react';
import '../style/App.css';
import { Link } from "react-router-dom";

function Header({setShow}) {
  return (
   <>
    <div className='heading'>
    <span><h1>Shopping App!!!</h1></span>
    <span className='cart'><Link to={"/cart"}><button>Cart Items</button></Link></span>
    </div>
   </>
  );
}

export default Header;
