import React from "react";

import "../styles/toggle-icon.scss";

const ToggleStarWars = () => {
  return (
    <div id="nav-container">
      <div
        class="toggle-icon"
        onClick={() =>
          document.getElementById("nav-container").classList.contains("pushed")
            ? document
                .getElementById("nav-container")
                .classList.remove("pushed")
            : document.getElementById("nav-container").classList.add("pushed")
        }
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  );
};

export default ToggleStarWars;
