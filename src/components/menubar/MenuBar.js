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
          height: this.props.location.path === "/pcn" ? 40 : 0,
          color: this.props.location.path === "/pcn" ? "black" : "white",
        }}
        to={{
          // End fully visible and in the middle of the screen
          height: this.props.location.path === "/pcn" ? 40 : 0,
          color: this.props.location.path === "/pcn" ? "black" : "white",
        }}
      >
        {props => (
          <div
            className="navigation"
            style={{...props,
            }}
          >
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
          <img src={barkadaLogo} className="center" style={{width: "auto", height:"40px"}}/>
          </div>

          // The actual box that slides down
        )}
      </Spring>
    );
  }
}

export default TopMenuBar;
