import React, { useContext } from "react";
import ProfilePic from "../../../assets/Images/profile.jpg"; // Import your profile picture
import cookie from "js-cookie"; // Import cookie library for handling cookies
import "./TimeLine.scss"; // Assuming you have a CSS file for styling
// This component represents a timeline post card with user information and an image
import { FaRegFaceLaugh } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LoaderContext from "../../context/LoaderContext";
const TimeLine = () => {

  const navigate = useNavigate(); // Hook from react-router-dom for navigation
  // Function to handle logout
 const {loaderDispatch} = useContext(LoaderContext)


  // call dispatch to update the auth state
   const { dispatch, user } = useContext(AuthContext);
  const handleLogout = (e) => {
    e.preventDefault();
    // Clear the user token from cookies
    cookie.remove("token");
    cookie.remove("user");
    
    dispatch({type: "LOGOUT_USER"}); // Dispatch logout action to update the auth state
    navigate("/login"); // Redirect to the login page
    loaderDispatch({type: "LOADING_START"})

  }
  return (
    <>
      <div className="time_line">
        <div className="post_card">
          <div className="post_header">
            <div className="post_header_left">
              <a href="">
                <img src={ProfilePic} alt="" />
              </a>
              <div className="post_user_left_info">
                <a className="name" href="#">
                 {user.fullName}
                </a>
                <span className="location">Dhaka</span>
              </div>
            </div>
            <div className="post_header_right">
              <button>
                <svg
                  aria-label="More options"
                  class="x1lliihq x1n2onr6 x5n08af"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>More options</title>
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="6" cy="12" r="1.5"></circle>
                  <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
              </button>
            </div>
          </div>
          <div className="time_line_img">
            <a href="#">
              <img
                src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-03/executive-table.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="comment_box">
            <div className="comment_box_area">
              <div className="icon_left">
                <a href="#">
                  <div>
                    <span class="">
                      <svg
                        aria-label="Like"
                        class="x1lliihq x1n2onr6 xyb1xck"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Like</title>
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                      </svg>
                    </span>
                  </div>
                </a>
                <a href="#">
                  <svg
                    aria-label="Comment"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Comment</title>
                    <path
                      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    aria-label="Share"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Share</title>
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
                </a>
              </div>
              <div className="icon_right">
                <a href="#">
                  <svg
                    aria-label="Save"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Save</title>
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </a>
              </div>
            </div>
            <div className="like_counts">
              <span>100 Likes</span>
            </div>
            <div className="post_description">
              <a href="#" className="post_user_name">
                Nur Amin
              </a>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatibus, cumque, quod, veritatis voluptatum
                quisquam voluptatibus, cumque, quod, veritatis voluptatum
                quisquam voluptatibus, cumque, quod, veritatis voluptatum.
              </span>
            </div>
            <div className="view_comments">
              <a href="#">View all 10 comments</a>
            </div>
            <div className="post_time">
              <span>2 hours ago</span>
            </div>
            <div className="add_comments_sec">
              <div className="add_comments">
                <a href="">
                  <FaRegFaceLaugh className="add_comment_icon" />
                </a>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="add_comment_input"
                />
              </div>
              <div className="post_btn">
                <button>Post</button>
              </div>
            </div>
          </div>
        </div>
        <div className="user_info">
          <div className="user_detailes">
            <img src={user.photo ? user.photo : `${ProfilePic}`} alt="" />
            <div className="username">
              <a href="#">{user.fullName}</a>
              <span>{user.username}</span>
              
            </div>
            <a href="#" onClick={handleLogout}>Logout</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
