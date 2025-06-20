import React from "react";
import "./AuthFooter.scss"; // Importing styles specific to the AuthFooter component
const AuthFooter = () => {

  const currentYear = new Date().getFullYear();
  // This component renders the footer section of the authentication page with links and a language selection dropdown.
  return (
    <>
      <div className="footer_sec">
        <ul>
          <li>
            <a href="#">Meta</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Instagram Lite</a>
          </li>
          <li>
            <a href="#">Therads</a>
          </li>
          <li>
            <a href="#">Contact Uploading & Non-Users</a>
          </li>
          <li>
            <a href="#">Meta Verified</a>
          </li>
        </ul>
        <div className="selection">
          <select name="" id="">
            <option value="">English</option>
            <option value="">Bangla</option>
            <option value="">Arabic</option>
            <option value="">Hindi</option>
            <option value="">Tamil</option>
          </select>
          <span>© {currentYear} Instagram from Meta</span>
        </div>
      </div>
    </>
  );
};

export default AuthFooter;
