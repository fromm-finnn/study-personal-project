import React from "react";

import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <a href="index.html">
        <img className="profileimg" alt="Profile.jpg" src="./img/Profile.jpg" />
      </a>
      <div className="listbox">
        <ul className="ulistbox1">
          <li> Name : Kim Dong Chan</li>
          <li> Gender : Male</li>
          <li> Age : 25</li>
        </ul>
        <ul className="ulistbox2">
          <li> Live : Suwon</li>
          <li> University : SungKyunKwan University</li>
          <li> Major : Electronic Electric Engineering</li>
        </ul>
        <ul className="ulistbox3">
          <li> Dream : Programmer</li>
          <li> MBTI : INFP</li>
          <li> Hobby : Writting Poem</li>
        </ul>
      </div>
      <footer>
        <p>Copyright ⓒ Kim Dong Chan</p>
      </footer>
    </div>
  );
};

export default Profile;
