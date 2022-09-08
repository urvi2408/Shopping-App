import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import '../style/App.css';
import { Link } from "react-router-dom";


const Filter = () => {

  const {category}=useParams([]);

  const [data,setData] = useState([]);
  const [cart,setCart] = useState([]);

  const handleclick = (product)=>{
    if(cart.indexOf(product)!== -1)
    return alert("already added");
    // setCart([...cart,product])
    cart.push(product);
    console.log(cart);
   }

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then((response)=>{
        setData(response.data);
    });
  },[category])

  return (
    <div className='product_container'>
    {
          data && data.length>0 && 
        data.map((product) => {
            {/* console.log(product); */}
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
  )
}

export default Filter