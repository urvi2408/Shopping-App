import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/App.css";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const credentials = {
    username: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const onsubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          navigate("/Home");
        } else {
          <p>incorrect information</p>;
        }
        setData(data);
      })
      .catch((error) => console.error("Login failed:", error));
  };

  return (
    <div className="login">
      <form onsubmit={onsubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="enter your username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
        />
        <br />
        <br />
        <button onClick={onsubmit}>Login</button>
      </form>

      <p>{data.token}</p>
    </div>
  );
}

export default Login;
