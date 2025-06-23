import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import './App.scss'; // Importing global styles
// Importing necessary components and styles for the application
// This file sets up the main application routes and imports global styles.
// Importing React Router for routing functionality
import React from "react";
import Home from "./pages/Home/Home.jsx";
import { AuthenticateUser } from "./middleware/AuthenticatUser.jsx";
import { AuthreDirectUser } from "./middleware/AuthreDirectUser.jsx";
// Importing the Login and Register components for user authentication


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthreDirectUser><Login /></AuthreDirectUser>} />
        <Route path="/register" element={<AuthreDirectUser><Register /></AuthreDirectUser>} />
        <Route path="/" element={<AuthenticateUser><Home /></AuthenticateUser>} />
        {/* Default route redirects to Login page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// This is a simple React component that serves as the main entry point for the social media application.
