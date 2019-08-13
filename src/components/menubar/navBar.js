import React, { Component } from "react";
import barkadaLogo from "./logo1.png";
import "./styles.css";

class navBar extends Component {
  render() {
    return (
      <div className="navigation">
        <h1
          style={{
            display: "inline-block",
            fontSize: "18px",
            marginTop: "12px"
          }}
        >
          Barkada of SCU
        </h1>
        <img
          src={barkadaLogo}
          style={{
            display: "inline-block",
            float: "right",
            height: "2.5%",
            width: "2.5%",
            marginRight: "47.5%"
          }}
        />
        <h1
          style={{
            display: "inline-block",
            fontSize: "18px",
            marginTop: "12px",
            float: "right"
          }}
        >
          PCN
        </h1>
      </div>
    );
  }
}

export default navBar;