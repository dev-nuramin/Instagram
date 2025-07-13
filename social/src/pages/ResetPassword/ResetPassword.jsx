import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const ResetPassword = () => {
  // State to manage the email input
  // This will hold the email entered by the user for password recovery
  const [input, setInput] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const {token} = useParams();
  const navigate = useNavigate();
  // Function to handle input changes
  // This updates the state with the current value of the input fields
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // State to manage messages for user feedback
  // This will show success or error messages based on the API response
  const [msg, setMsg] = useState({
    type: "",
    msg: "",
    status: false,
  });

  // Handle form submission
  // This function sends a POST request to the server with the email for password recovery
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      setMsg({
        type: "danger",
        msg: "Passwords do not match",
        status: true,
      });
      return;
    } else if (input.password.length < 6) {
      setMsg({
        type: "danger",
        msg: "Password must be at least 6 characters long",
        status: true,
      });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5150/api/users/reset-password",
          {
            token: token,
            password: input.password,
          },
          
        );

        setMsg({
          type: "success",
          msg: response.data.message,
          status: true,
        });
        navigate('/login')
      } catch (error) {
        setMsg({
          type: "danger",
          msg: error.response.data.message || "An error occurred",
          status: true,
        });
      }
    }
  };

  return (
    <div className="forgot_password" style={{ marginTop: "50px" }}>
      <div className="container height-100">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 ">
            <div className="my-3">
              <div className="card shadow">
                <div className="card-body">
                  <a
                    href="#"
                    className="register_logo_link d-flex justify-content-center my-2"
                  >
                    <img
                      src="https://i.ibb.co/rKF8Q2mk/insta-removebg-preview.png"
                      alt="insta-removebg-preview"
                      border="0"
                    />
                  </a>
                  <div className="card-header">
                    <h5 className="card-title">Reset Your Password !</h5>
                  </div>
                  {msg.status && (
                    <p className={`alert alert-${msg.type}`}>{msg.msg}</p>
                  )}
                  <form onSubmit={handleResetPassword}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Set Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="email"
                        placeholder="New Password"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        type="password"
                        className="form-control"
                        id="email"
                        placeholder="Confirm New Password"
                        name="confirmPassword"
                        value={input.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Set new Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
