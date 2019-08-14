import React, { useState } from "react";
import barkadaLogo from "./logo1.png";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./styles.css";

const TopMenuBar = () => {
  return (
    <div
      className="navigation"
      style={{
        backgroundImage: `url(${barkadaLogo})`,
      }}
    >
      <Link to="/" style={{ color: "black" }}>
        <h1
          style={{
            display: "inline-block",
            marginLeft: "2.5%",
            float: "left",
            fontSize: "18px",
            textDecoration: "none"
          }}
        >
          Barkada of SCU
        </h1>
      </Link>
      <Link to="/pcn" style={{ color: "black" }}>
        <h1
          style={{
            display: "inline-block",
            float: "right",
            fontSize: "18px",
            textDecoration: "none",
            marginRight: "2.5%"
          }}
        >
          PCN
        </h1>
      </Link>
    </div>
  );
};

export default TopMenuBar;
