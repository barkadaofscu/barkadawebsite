import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import ImageFade from "./ImageFade";

class HomePage extends Component {
  render() {
    return (
      <animated.div
        style={{
          ...this.props.style,
          height: "100vh",
          overflowY: "scroll",
          zIndex: 3,
          padding: 0
        }}
      >
        <ImageFade />
        <div
          style={{
            marginTop: "100vh",
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "blue",
            textAlign: "center",
            overflow: "hidden"
          }}
        >
          <h1 style={{ color: "white" }}>About</h1>
        </div>
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "red",
            textAlign: "center",
            overflow: "hidden"
          }}
      >
          <h1 style={{ color: "white" }}>KAA</h1>
      </div>
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "green",
            textAlign: "center",
            overflow: "hidden"
          }}
      >
          <h1 style={{ color: "white" }}>Community Outreach</h1>
      </div>
      </animated.div>
    );
  }
}

export default HomePage;
