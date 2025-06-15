import React from 'react'
import ProfilePic from "../../../assets/Images/profile.jpg"; // Import your profile picture
import "./TimeLine.scss"; // Assuming you have a CSS file for styling
// This component represents a timeline post card with user information and an image
const TimeLine = () => {
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
                      Nur Amin
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
            </div>
            <div className="user_info"></div>
          </div>
    </>
  )
}

export default TimeLine
