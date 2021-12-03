import React from "react";
import "./style.css";
import Illustrationimg from "../../../../assets/images/Illustrationimage.png";

function Illustration() {
  return (
    <div className="Introduction">
      <div id="illustration_Image">
        <img src={Illustrationimg} alt="" align-self="center"/>
      </div>
    </div>
  );
}

export default Illustration;
