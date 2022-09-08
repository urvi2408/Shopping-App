import React from 'react';
import {useEffect , useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../style/App.css';
// import {useParams} from "react-router-dom";

function Product(){
  // debugger;
  // const {id} = useParams();

   const [data,setData] = useState([]);
   const [cart,setCart] = useState([]);

   useEffect(() => {
       axios.get("https://fakestoreapi.com/products")
       .then((Response) => {
        console.log(Response.data);
        setData(Response.data);
       });
   },[])
   
    const handleclick = (product)=>{
    if(cart.indexOf(product)!== -1)
    return alert("already added");
    // setCart([...cart,product])
    cart.push(product);
    console.log(cart);
   }
  //  const addtocart = () =>{
  //   axios.post(`https://fakestoreapi.com/products/${id}`);
  //   console.log(id)
  //  }

  return (
   <div className='product_container'>
    {
        data && data.length>0 && 
        data.map((product)=>{
            console.log(product);
        return(
        <div className='card'>
           <div>
            <Link to={`${product.id}`} >
             <img id={product.id} className='img' src={product?.image} alt="#"/>
            </Link>
            </div>
           <div className='card_info'>
               <h6>{product?.title}</h6>
               <h6>{`price($) : ${product?.price}`}</h6>
               <h6>{`category : ${product?.category}`}</h6>
               <button onClick={() => handleclick(product)} className='addtocart' handleclick={handleclick}>ADD TO CART</button>
           </div>
        </div>
        )
        })
    }
   </div>
  );
}

export default Product;
