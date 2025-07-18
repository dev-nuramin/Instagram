import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import LoadingBar from "react-top-loading-bar";
import "./App.scss"; // Importing global styles
// Importing necessary components and styles for the application
// This file sets up the main application routes and imports global styles.
// Importing React Router for routing functionality
import React, { useEffect } from "react";
import Home from "./pages/Home/Home.jsx";
import { AuthenticateUser } from "./middleware/AuthenticatUser.jsx";
import { AuthreDirectUser } from "./middleware/AuthreDirectUser.jsx";
import Cookie from "js-cookie";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "./context/AuthContext.js";
import Swal from "sweetalert2";
import LoaderContext from "./context/LoaderContext.js";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify/Verify.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
// Importing the Login and Register components for user authentication

function App() {
  const token = Cookie.get("token");
  const { dispatch } = useContext(AuthContext);

  const { loaderState, loaderDispatch } = useContext(LoaderContext);

  const showAlert = (msg) => {
    Swal.fire(msg);
  };
  useEffect(() => {
    try {
      axios
        .get("http://localhost:5150/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.isVerified && token) {
            dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
          } else {
            showAlert("Please verify your account");
            Cookie.remove("token");
          }
        })
        .catch(() => {
          dispatch({ type: "LOGOUT_USER" });
        });
    } catch (error) {
      console.log(error);
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <LoadingBar
        color="#f11946"
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch({ type: "LOADING_END" })}
      />
      <ToastContainer />
      <Routes>
        <Route
          path="/login"
          element={
            <AuthreDirectUser>
              <Login />
            </AuthreDirectUser>
          }
        />
        <Route
          path="/register"
          element={
            <AuthreDirectUser>
              <Register />
            </AuthreDirectUser>
          }
        />
        <Route
          path="/"
          element={
            <AuthenticateUser>
              <Home />
            </AuthenticateUser>
          }
        />
        <Route
          path="/user/:id/verify/:token"
          element={
            <Verify />
          }
        />
        <Route 
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        {/* Default route redirects to Login page */}

        <Route
          path="/password-recover/:token"    
          element={
            <ResetPassword />
          }
        />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
// This is a simple React component that serves as the main entry point for the social media application.
