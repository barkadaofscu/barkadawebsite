import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import ImageFade from "./ImageFade";

class HomePage extends Component {
  render() {
    return (
      <animated.div
        style={{ ...this.props.style, height: "100%", overflow: "scroll" }}
      >
        <ImageFade />
        <div
          style={{
            marginTop: "100vh",
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "blue"
          }}
        ></div>
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "red"
          }}
        ></div>
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "green"
          }}
        ></div>
      </animated.div>
    );
  }
}

export default HomePage;
