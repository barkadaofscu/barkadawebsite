import React, { Component, useState } from "react";
import barkadaLogo from "./logo1.png";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import "./styles.css";

class TopMenuBar extends Component {
  render() {
    return (
      <Spring
        from={{
            // Start invisible and offscreen
            opacity: 0,
            position: "sticky",
            top: 0
        }}
        to={{
            // End fully visible and in the middle of the screen
            opacity: 1
        }}
      >
        {props => (
          <div className="navigation" style={{ ...props, zIndex: 4 }}>
            <Link to="/" style={{ color: "black" }}>
              <h1
                style={{
                  display: "inline-block",
                  marginLeft: "2.5%",
                  float: "left",
                  fontSize: "20px",
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
                  fontSize: "20px",
                  textDecoration: "none",
                  marginRight: "2.5%"
                }}
              >
                PCN
              </h1>
            </Link>
            <img
              src={barkadaLogo}
              className="center"
              style={{ width: "auto", height: "40px" }}
            />
          </div>

          // The actual box that slides down
        )}
      </Spring>
    );
  }
}

export default TopMenuBar;
