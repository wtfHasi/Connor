// src/components/Login.jsx
import React, { useState } from "react";
import { loginUser } from "../api";
import "./login.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log("Login successful:", response);
      alert("Login successful!");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="login-container">
      <video className="bg-video" autoPlay muted loop>
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div class="welcome-text">
        <p>Welcome to Connor, your AI-powered chatbot companion. Experience the future of interaction!</p>
        </div>
        <div class="footer">
          © 2024 Connor Chatbot. All Rights Reserved.
          </div>
    </div>
    
  );
};

export default Login;
