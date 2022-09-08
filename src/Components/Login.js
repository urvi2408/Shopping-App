import React,{useState} from 'react';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import "../style/App.css";

function Login() {

  const[username,setUserName] = useState("");
  const[password,setPassWord] = useState("");
  const[data,setData] = useState([]);
  const navigate = useNavigate();

  const onsubmit =(e) => {
    e.preventDefault();
    axios.post("https://fakestoreapi.com/auth/login",{username:username ,password:password})
    .then((response)=>{
        if(response.data.token){
            navigate('/Home');
        }
        else{
            <p>incorrect information</p>
        }
        setData(response.data);
        console.log(data);
    })
    setData([data]);
  }

  return (
    <div className='login'>
        <form onsubmit={onsubmit}>
            <h2>Login</h2>
            <input type="text" placeholder='enter your username' value={username} onChange={(e)=>setUserName(e.target.value)}/><br/><br/>
            <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassWord(e.target.value)}/><br/><br/>
            <button onClick={onsubmit}>Login</button>
        </form>

        <p>{data.token}</p>
    </div>
  )
}

export default Login;