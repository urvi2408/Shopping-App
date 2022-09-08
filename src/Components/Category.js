import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import '../style/App.css';
import Header from './Header';
import Footer from './Footer';

function Category() {

   const [category,setCategory]=useState([]);

   useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/categories`)
    .then((response)=>{
     console.log(response.data);
     setCategory(response.data);
    });
   },[])

  return (
    <div className='category'>
    <Link to={`/category/${category[0]}`}><h4>{category[0]}</h4></Link>
    <Link to={`/category/${category[1]}`}><h4>{category[1]}</h4></Link>
    <Link to={`/category/${category[2]}`}><h4>{category[2]}</h4></Link>
    <Link to={`/category/${category[3]}`}><h4>{category[3]}</h4></Link>
    <Link to="/sort"><h4>sort</h4></Link>
    </div>
  );
}

export default Category;