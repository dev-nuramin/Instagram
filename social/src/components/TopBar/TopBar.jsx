import React from "react";
import { FiSearch } from "react-icons/fi";
import "./TopBar.scss"; // Assuming you have a CSS file for styling
// You can also use inline styles or CSS modules if preferred
import ProfilePic from "../../../assets/Images/profile.jpg"; // Import your profile picture
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
const TopBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
      <div className="topbar_container">
        <div className="topbar_wrapper">
          <div className="logo">
            <img
              src="https://i.ibb.co/rKF8Q2mk/insta-removebg-preview.png"
              alt="insta-removebg-preview"
              border="0"
            />
          </div>
          <div className="search_bar">
            <button>
              <a href="#">
              <FiSearch />
             
            </a>
            </button>
             <input type="text" placeholder="Search" />
          </div>
          <div className="icons_items">
            <ul>
              <li>
                <a href="#">
                  <svg
                    aria-label="Home"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Home</title>
                    <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
                  </svg>
                  {/* Home */}
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    aria-label="Search"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Search</title>
                    <path
                      d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="16.511"
                      x2="22"
                      y1="16.511"
                      y2="22"
                    ></line>
                  </svg>
                  {/* Search */}
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    aria-label="Explore"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Explore</title>
                    <polygon
                      fill="none"
                      points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                    <polygon
                      fill-rule="evenodd"
                      points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                    ></polygon>
                    <circle
                      cx="12.001"
                      cy="12.005"
                      fill="none"
                      r="10.5"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></circle>
                  </svg>
                  {/* Explore */}
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    aria-label="Direct"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Direct</title>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                  {/* Direct */}
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    aria-label="Notifications"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Notifications</title>
                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                  </svg>
                  {/* Notifications */}
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={user.photo ? user.photo : `${ProfilePic}`} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
