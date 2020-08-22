import React from "react";

import "../styles/loading-page.scss";

const LoadingBB8 = () => {
  return (
    <div className="droid">
      <div className="droid-head">
        <div className="head-top">
          <div className="top">
            <div className="eye"></div>
          </div>
        </div>
        <div className="head-bottom">
          <div className="bottom"></div>
        </div>
      </div>
      <div className="droid-body">
        <div className="circle circle-one">
          <div className="inner"></div>
        </div>
        <div className="circle circle-two"></div>
        <div className="circle circle-third">
          <div className="inner"></div>
        </div>
        <div className="dot dot-one"></div>
        <div className="dot dot-two"></div>
        <div className="stroke stroke-one"></div>
        <div className="stroke stroke-two"></div>
        <div className="stroke stroke-three"></div>
      </div>
      <div className="body-shadow-crop">
        <div className="bodyshadow"></div>
      </div>
    </div>
  );
};

export default LoadingBB8;
