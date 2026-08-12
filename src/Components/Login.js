import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/App.css";
import { useAuth } from "../context/AuthContext";

const API_KEY = "free_user_3HnpFcx67Uzsayd8ot8aDoEwN0d"; // from https://app.reqres.in/api-keys

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  // Hardcoded credentials
  const credentials = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
      body: JSON.stringify({ email, password }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.ok && data.token) {
          login(data.token);
          navigate("/Home");
        } else {
          setError(data.error || "Incorrect email or password");
        }
      })
      .catch((err) => {
        console.error("Login failed:", err);
        setError("Something went wrong. Please try again.");
      });
  };


  const handleUseSuggested = () => {
    setEmail(credentials.email);
    setPassWord(credentials.password);
    setError("");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={onSubmit} className="login-form">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to your account</p>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn">Login</button>

          <div className="credentials-suggestion">
            <p className="suggestion-text">Demo Credentials:</p>
            <div className="credentials-box">
              <p><strong>Email:</strong> {credentials.email}</p>
              <p><strong>Password:</strong> {credentials.password}</p>
            </div>
            <button
              type="button"
              onClick={handleUseSuggested}
              className="use-credentials-btn"
            >
              Use Demo Credentials
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;