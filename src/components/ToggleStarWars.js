import React from "react";

import "../styles/toggle-icon.scss";

const ToggleStarWars = () => {
  return (
    <div id="nav-container">
      <div
        className="toggle-icon"
        onClick={() =>
          document.getElementById("nav-container").classList.contains("pushed")
            ? document
              .getElementById("nav-container")
              .classList.remove("pushed")
            : document.getElementById("nav-container").classList.add("pushed")
        }
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default ToggleStarWars;
