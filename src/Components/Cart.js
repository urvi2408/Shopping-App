import React,{useState,useEffect}from 'react';
import axios from 'axios';
import '../style/App.css';


function Cart() {

  const [product ,setProduct]=useState([]);
  
  useEffect(()=> {
    axios.get(`https://fakestoreapi.com/products/5`)
    .then((Response) => {
     console.log(Response.data);
     setProduct(Response.data);
     console.log(setProduct)
    });
},[]) 

  return (
   <div>
      <div className='details'>

         <div className='img2'>
         <img alt="#" className='product_img'src={product.image} />
         </div>
      
         <div className='description'>
             <h4>{product?.title}</h4>
             <h6>{`price($) : ${product?.price}`}</h6>
             <h4>{`category : ${product?.category}`}</h4>
             <h4>{`Description : ${product?.description}`}</h4>
         </div>

      </div>
   </div>
  );
}

export default Cart;

