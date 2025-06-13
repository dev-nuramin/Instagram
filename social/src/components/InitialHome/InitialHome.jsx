import React from "react";
import instaHomeImg from "../../../assets/Images/instaHomeImage.png";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./InitialHome.scss"; // Importing styles specific to the InitialHome component
import AuthFooter from "../AuthFooter/AuthFooter";
// This component renders the initial home page with a login form, a link to sign up, and options to get the app.   
const InitialHome = () => {
  return (
    <>
      <div className="initial_container">
         <div className="left_container">
            <img src={instaHomeImg} alt="" />
          </div>
          <div className="right_container">
            
              <div className="right_wrapper">
                <a href="#" className="right_logo_link">
                  <img
                    src="https://i.ibb.co/rKF8Q2mk/insta-removebg-preview.png"
                    alt="insta-removebg-preview"
                    border="0"
                  />
                </a>
                <form action="#" className="right_form">
                  <input
                    type="text"
                    className="right_name"
                    placeholder="username phone or email"
                  />
                  <input
                    type="password"
                    className="right_password"
                    placeholder="password"
                  />
                  <button className="right_button">Log In</button>
                </form>
                <div className="divider">
                  <p>OR</p>
                </div>
                <div className="right_fb">
                  <a href="#" className="right_fb_link">
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
      </div>
      <AuthFooter />
    </>
  );
};

export default InitialHome;
