import "./style.css";
import React from "react";
import logo from "../../../../assets/images/Softsuavelogo.png";
import {Link} from "react-router-dom";

function Softsuavelogo() {
  return (
      <div className="header_softsuavelogo">
        <Link to="/">
        <img src={logo} top="0" left="0" alt="" />
        </Link>
      </div>
  );
}

export default Softsuavelogo;
