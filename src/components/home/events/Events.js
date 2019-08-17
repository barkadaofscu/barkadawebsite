import React, { Component } from "react";
import { animated } from "react-spring/renderprops";

class Events extends Component {
  render() {
    return (
      <animated.div
        style={{
          ...this.props.style,
          zIndex: 3,
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "pink"
        }}
      >
          <h1 style={{ color: "white" }}>Events/Programs</h1>
      </animated.div>
    );
  }
}

export default Events;
