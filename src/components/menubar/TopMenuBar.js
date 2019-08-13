import React, { useState } from "react";
import barkadaLogo from "./logo1.png";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./styles.css";

const TopMenuBar = () => {
  return (
    <div className="navigation">
      <Link to="/">
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
      </Link>
      <Link to="/pcn">
        <h1
          style={{
            display: "inline-block",
            marginRight: "1.25%",
            float: "right",
            fontSize: "18px"
          }}
        >
          PCN
        </h1>
      </Link>
      <img
        src={barkadaLogo}
        alt="Barkada Logo"
        style={{
          display: "inline-block",
          float: "right",
          height: "50px",
          width: "auto",
          marginLeft: "auto",
          marginRight: "42.5%",
          zIndex: "2"
        }}
      />
    </div>
  );
};

export default TopMenuBar;
