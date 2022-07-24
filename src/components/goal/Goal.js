import React from "react";

import "./Goal.css";

const Goal = () => {
  return (
    <div>
      <div class="step1">
        <p class="step1_contents">HTML CSS JAVASCRIPT</p>
        <p class="running">
          <i class="fa fa-solid fa-person-running fa-3x" />
        </p>
      </div>
      <div class="step2">
        <p class="step2_contents">FRAMEWORK</p>
      </div>
      <div class="step3">
        <p class="step3_contents">VERSION CONTROL SYSTEN PACKAGE MANAGER</p>
        <div class="goal">
          <a href="index.html">
            <p class="beginner">BEGINNER ESCAPE</p>
            <p class="trophy">
              <i class="fa-solid fa-trophy fa-3x"></i>
            </p>
          </a>
        </div>
      </div>

      <div class="wall"></div>
      <footer>
        <p>Copyright ⓒ Kim Dong Chan</p>
      </footer>
    </div>
  );
};

export default Goal;
