import React from "react";

import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="float_wrap">
        <div className="main_box">
          {/* <a href="index.html"></a> */}
          <img className="image" alt="index" src="./img/index.jpg" />
          <div className="contact">
            <p className="name">
              <strong>Kim Dong Chan</strong>
            </p>
            <p className="phone">010-2615-5036</p>
            <p className="email">kdc5036@gmail.com</p>
          </div>
        </div>
        <div className="contents_box">
          <p>
            <a className="profile" href="Profile.html">
              Profile
            </a>
          </p>
          <p>
            <a className="career" href="Career.html">
              Career
            </a>
          </p>
          <p>
            <a className="goal" href="Goal.html">
              Goal
            </a>
          </p>
        </div>
      </div>
      <i class="fa fa-solid fa-asterisk fa-spin fa-3x"></i>

      <footer>
        <p>Copyright ⓒ Kim Dong Chan</p>
      </footer>
    </div>
  );
};

export default Main;
