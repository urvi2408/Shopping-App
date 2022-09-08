import React,{useState,useEffect}from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import '../style/App.css';


function Product_Info() {

  const {id} = useParams();
  // console.log("aa",id)
  const [product ,setProduct]=useState([]);
  const [cart,setCart] = useState([]);

  const handleclick = (product)=>{
    if(cart.indexOf(product)!== -1)
    return alert("already added");
    // setCart([...cart,product])
    cart.push(product);
    console.log(cart);
   }
  useEffect(()=> {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((Response) => {
     console.log(Response.data);
     setProduct(Response.data);
     console.log(setProduct)
    });
},[id]) 

  return (
   <div>
      <Header/>
      <div className='details'>

         <div className='img2'>
         <img alt="#" className='product_img'src={product.image} />
         </div>
      
         <div className='description'>
             <h4>{product?.title}</h4>
             <h4>{`price($) : ${product?.price}`}</h4>
             <h4>{`category : ${product?.category}`}</h4>
             <h4>{`Description : ${product?.description}`}</h4>
             <button onClick={() => handleclick(product)} className='addtocart' handleclick={handleclick}>ADD TO CART</button>
         </div>

      </div>
      <Footer/>
   </div>
  );
}

export default Product_Info;
