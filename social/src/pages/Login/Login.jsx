import React, { useContext, useState } from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import "./Login.scss"; // Importing styles specific to the Login component
import { Link, useNavigate } from "react-router-dom";
import AuthFooter from "../../Components/AuthFooter/AuthFooter";

import axios from "axios";
import cookie from "js-cookie";
import AuthContext from "../../context/AuthContext";
import LoaderContext from "../../context/LoaderContext";
import { showAlert } from "../../utility/sweetAlert";
import { showToast } from "../../utility/toast";
// This component renders a login form with fields for username and password, and a button to log in.
const Login = () => {
  // Function to handle form submission
  const [input, setInput] = useState({
    auth: "",
    password: "",
  });

  // recall loader from loaderContext

  const { loaderDispatch } = useContext(LoaderContext);

  // use navigate from react-router-dom if you want to redirect after login
  const navigate = useNavigate();

  // use context to manage authentication state
  const { dispatch } = useContext(AuthContext);

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInput((perv) => ({
      ...perv,
      [e.target.name]: e.target.value, // Dynamically update the state based on input name
    }));
  };

  // Function to handle user login
  const handleUserLogin = async (e) => {
    e.preventDefault();
    // Here you can add your login logic, such as sending data to an API
    try {
      if (!input.auth || !input.password) {
        showAlert({
          icon: "error",
          title: "Nice try",
          text: "Please fill all the fields!",
        });
        return;
      }

      await axios
        .post("http://localhost:5150/api/users/login", {
          email: input.auth,
          password: input.password,
        })
        .then((res) => {
          if (res.data.user.isVerified) {
            cookie.set("token", res.data.token, { expires: 7 }); // Set token in cookies for 7 days
            // Redirect to home page or perform any other action
            dispatch({
              type: "LOGIN_USER_SUCCESS",
              payload: res.data.user,
            });
            navigate("/");
            loaderDispatch({ type: "LOADING_START" });
          }else{
            showToast('Verify your account')
          }
        });
    } catch (error) {
      console.error("Login error:", error);
      showAlert({
        icon: "error",
        title: "Login Failed",
        text: "Please check your password or email.",
      });
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="login_wrapper">
          <a href="#" className="login_logo_link">
            <img
              src="https://i.ibb.co/rKF8Q2mk/insta-removebg-preview.png"
              alt="insta-removebg-preview"
              border="0"
            />
          </a>
          <form action="#" className="login_form" onSubmit={handleUserLogin}>
            <input
              type="text"
              className="login_name"
              placeholder="username phone or email"
              name="auth"
              value={input.auth}
              onChange={handleInputChange} // Assuming handleInputChange is defined to update state
            />
            <input
              type="password"
              className="login_password"
              placeholder="password"
              name="password"
              value={input.password}
              onChange={handleInputChange} // Assuming handleInputChange is defined to update state
            />
            <button type="submit" className="login_button">
              Log In
            </button>
          </form>
          <div className="divider">
            <p>OR</p>
          </div>
          <div className="login_fb">
            <a href="#" className="login_fb_link">
              <a href="#" className="fb_logo">
                <BiLogoFacebookSquare />
              </a>
              Log in with facebook
            </a>
          </div>
          <div className="forgot_password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </div>

        <div className="signup_wrapper">
          <span>
            Don't have account ? <Link to="/register">Sign up</Link>
          </span>
        </div>
        <div className="get_the_app">
          <span>Get the app</span>
          <div className="get_the_app_wrapper">
            <a href="#">
              <img
                src="https://i.ibb.co/DfG3nPr2/apple-png.png"
                alt="apple-png"
                border="0"
              />
            </a>
            <a href="https://ibb.co/HLWfKGVS">
              <img
                src="https://i.ibb.co/mrLVRhGj/googleplay-png.png"
                alt="googleplay-png.png"
                border="0"
              />
            </a>
          </div>
        </div>
        <AuthFooter />
      </div>
    </>
  );
};

export default Login;
