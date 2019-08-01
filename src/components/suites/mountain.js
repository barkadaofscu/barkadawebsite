import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Transition, animated, Spring } from "react-spring/renderprops";
import { Route, Link, Redirect } from "react-router-dom";
import mountain1 from "./assets/mountain.jpg";

const mountainSuite = style => {
  return (
    <animated.div style={{ ...style, overflowY: "hidden" }}>
      <Link push to="/pcn">
        <div
          style={{
            width: "50px",
            height: "50px",
            position: "sticky",
            zIndex: "10",
            marginTop: "10%",
            marginRight: "10%",
            float: "right",
            color: "white",
            textDecoration: "none"
          }}
        >
          X
        </div>
      </Link>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: "#243B4A" }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        ></ParallaxLayer>
      </Parallax>
    </animated.div>
  );
};

export default mountainSuite;
