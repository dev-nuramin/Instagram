import React from "react";

const ForgotPassword = () => {

    const [email, setEmail] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert("Please enter your email address.");
            return;
        }
      
        console.log("Sending password reset link to:", email);
        
    
        // Here you would typically send the email to your backend to handle the password reset
        console.log("Password reset link sent to:", email);
    }
  return (
    <div className="forgot_password" style={{ marginTop: "50px" }}>
      <div className="container height-100">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 ">
            <div className="my-3">
              <div className="card shadow">
                <div className="card-body">
                  <div className="card-header">
                    <h5 className="card-title">Forgot Password ?</h5>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send Reset Link
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

export default ForgotPassword;
