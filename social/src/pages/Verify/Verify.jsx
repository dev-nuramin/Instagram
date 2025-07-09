import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Verify.scss"; // Importing styles for the Verify component
import { showToast } from "../../utility/toast";

const Verify = () => {
  const navigate = useNavigate();
  // Using useNavigate to programmatically navigate after verification
  const { id, token } = useParams();

  useEffect(() => {
    axios
      .post("http://localhost:5150/api/users/verify", { id, token })
      .then((res) => {
        navigate("/login");
        showToast(
          "Account verified successfully! Please log in.",
          res.data.message
        );
      })
      .catch((err) => {
        showToast(
          "verification failed",
          err.response?.data?.message || "An error occurred during verification"
        );
      })

      .catch((err) => console.error("Axios error:", err.message));
  }, [id, token, navigate]);

  return (
    <div className="verify_container">
      <div className="verify_box">
        <h1>Verify Your Account</h1>
        <p>Please wait while we verify your account...</p>
      </div>

      {/* You can add a spinner or loading animation here if desired */}
    </div>
  );
};

export default Verify;
