import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import "./Login.scss"; // Importing styles specific to the Login component
import { Link } from "react-router-dom";
// This component renders a login form with fields for username and password, and a button to log in.
const Login = () => {
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
          <form action="#" className="login_form">
            <input
              type="text"
              className="login_name"
              placeholder="username phone or email"
            />
            <input
              type="password"
              className="login_password"
              placeholder="password"
            />
            <button className="login_button">Log In</button>
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
            <a href="#">Forgot password?</a>
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
      </div>
    </>
  );
};

export default Login;
