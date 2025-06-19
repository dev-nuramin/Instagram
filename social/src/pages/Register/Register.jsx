import React, { useState } from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import "./Register.scss"; // Importing styles specific to the Register component
import { Link } from "react-router-dom";
import AuthFooter from "../../Components/AuthFooter/AuthFooter";

// This component renders a registration form with fields for username and password, and a button to register.
const Register = () => {
  // state update for form fields
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value, // Dynamically update the state based on input name
    }));
  };

  console.log(input)
  return (
    <div className="register_container">
      <div className="register_wrapper">
        <a href="#" className="register_logo_link">
          <img
            src="https://i.ibb.co/rKF8Q2mk/insta-removebg-preview.png"
            alt="insta-removebg-preview"
            border="0"
          />
        </a>
        <span className="register_text">
          Sign up to see photos and videos from your friends.
        </span>
        <button className="login_with_fb">
          <a href="#" className="reg_fb_logo">
            <BiLogoFacebookSquare />
            Login with facebook
          </a>
        </button>
        <div className="divider">
          <p>OR</p>
        </div>
        <form action="#" className="register_form">
          <input
            type="text"
            className="register_name"
            placeholder="Mobile number or email"
            value={input.email}
            name="email"
            onChange={handleChange} // Using handleChange to update state on input change
          />
          <input
            type="text"
            className="register_name"
            placeholder="Full Name"
            value={input.fullName}
            name="fullName"
            onChange={handleChange}
          />
          <input
            type="text"
            value={input.username}
            name="username"
            onChange={handleChange}
            className="register_name"
            placeholder="Username"
          />
          <input
            type="password"
            className="register_password"
            placeholder="password"
            value={input.password}
            onChange={handleChange}
            name="password"
          />

          <div className="terms_condition_text">
            <div className="text_first">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram. <a href="#">Learn More</a>
              </p>
            </div>
            <div className="text_sec">
              <p>
                By signing up, you agree to our <a href="#">Terms</a> ,{" "}
                <a href="#">Privacy Policy</a> and
                <a href="#"> Cookies Policy</a> .
              </p>
            </div>
          </div>
          <button className="register_button">Sign Up</button>
        </form>
      </div>
      <div className="signup_wrapper">
        <span>
          Have an account ? <Link to="/login">Log in</Link>
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
      {/* Footer component for authentication pages */}
    </div>
  );
};

export default Register;
