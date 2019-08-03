import React, { useState } from "react";
import barkadaLogo from "./logo1.png";
import { useSpring, animated } from "react-spring";
import "./styles.css";

const TopMenuBar = () => {
  return (
    <div className="navigation">
      <h1
        style={{
          display: "inline-block",
          marginLeft: "2.5%",
          float: "left",
          fontSize: "18px"
        }}
      >
        Barkada of SCU
      </h1>
      <img
        src={barkadaLogo}
        alt="Barkada Logo"
        style={{
          display: "inline-block",
          float: "right",
          height: "50px",
          width: "auto",
          marginLeft: "auto",
          marginRight: "47.5%"
        }}
      />
    </div>
  );
};

export default TopMenuBar;
