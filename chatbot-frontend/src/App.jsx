import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/tailwind.css';
import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import BackgroundVideo from "./components/BackgroundVideo";
import ChatBot from "./components/ChatBot";  // Import your new ChatBotPage component
import AboutPage from "./components/AboutPage"; // Import the AboutPage component

const App = () => {
  return (
    <Router>
      <BackgroundVideo />
      <Navbar />
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<HomePage />} />

        {/* Other Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatbot" element={<ChatBot />} /> {/* Add the chatbot route */}
        
        {/* About Page Route */}
        <Route path="/about" element={<AboutPage />} /> {/* Add About page route */}
      </Routes>
    </Router>
  );
};

export default App;