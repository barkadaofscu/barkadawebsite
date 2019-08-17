import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import ImageFade from "./ImageFade";
import About from "./about/About";

class HomePage extends Component {
  render() {
    return (
      <animated.div
        style={{
          ...this.props.style,
          height: "100%",
          overflowY: "scroll",
          zIndex: 3,
          padding: 0
        }}
      >
        <ImageFade />
        <About />
        <div
          style={{
            marginTop: "200vh",
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "red",
            textAlign: "center",
            overflow: "hidden"
          }}
        >
            <h1 style={{ color: "white" }}>Events/Programs</h1>
          <Link to="/events">Events</Link>
        </div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
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
