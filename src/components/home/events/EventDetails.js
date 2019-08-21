import React, { Component } from "react";
import { animated } from "react-spring/renderprops";

class EventDetails extends Component {
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
        
    </animated.div>
    );
  }
}

export default EventDetails;
