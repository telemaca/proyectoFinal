import React from "react";

import "../styles/loading-page.scss";

const LoadingBB8 = () => {
  return (
    <div class="droid">
      <div class="droid-head">
        <div class="head-top">
          <div class="top">
            <div class="eye"></div>
          </div>
        </div>
        <div class="head-bottom">
          <div class="bottom"></div>
        </div>
      </div>
      <div class="droid-body">
        <div class="circle circle-one">
          <div class="inner"></div>
        </div>
        <div class="circle circle-two"></div>
        <div class="circle circle-third">
          <div class="inner"></div>
        </div>
        <div class="dot dot-one"></div>
        <div class="dot dot-two"></div>
        <div class="stroke stroke-one"></div>
        <div class="stroke stroke-two"></div>
        <div class="stroke stroke-three"></div>
      </div>
      <div class="body-shadow-crop">
        <div class="bodyshadow"></div>
      </div>
    </div>
  );
};

export default LoadingBB8;
