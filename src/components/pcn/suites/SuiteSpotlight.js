import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import mountain from "./assets/mountain.jpg";

const SuiteSpotlight = props => {
  return (
    <div
      style={{
        width: "85%",
        height: "100vh",
        marginLeft: "7.5%",
        marginTop: "2.5%",
        position: "absolute",
        overflow: "scroll"
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          float: "right",
          position: "absolute",
          zIndex: 10,
          fontSize: 40,
          marginLeft: "85%",
          marginTop: "2.5%"
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          X
        </Link>
    </div>
    {/*
      <img src={mountain} style={{ width: "100%", height: "auto" }} />
        */}
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          style={{ width: "100%", backgroundColor: "#243B4A" }}
        >
          <img src={mountain} style={{ width: "100%", height: "auto" }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{ width: "100%", backgroundColor: "#805E73" }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{ width: "100%", backgroundColor: "#87BCDE" }}
        ></ParallaxLayer>

        <ParallaxLayer></ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default SuiteSpotlight;
