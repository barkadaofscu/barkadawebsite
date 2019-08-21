import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import { Icon } from "antd";

class EventDetails extends Component {
  render() {
    const styles = {
      fontFamily: "Menlo-Regular, Menlo, monospace",
      fontSize: 14,
      lineHeight: "10px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
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
        <Parallax ref="parallax" pages={3}>
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{ backgroundColor: "#243B4A" }}
          >
            <h1 style={{color: "white"}}>Event details to be added</h1>
            <div
              style={{ marginTop: "20%", float: "left", marginLeft: "24px" }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <p style={{ color: "white", fontSize: "24px", marginTop: 8 }}>
                  Back to home
                </p>
                <Icon
                  type="left"
                  style={{ color: "white", fontSize: "36px" }}
                />
              </Link>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#87BCDE" }}
          />

          <ParallaxLayer
            offset={1}
            speed={-0.1}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(2)}
          >
            Another page ...
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(0)}
          >
            The end.
          </ParallaxLayer>
        </Parallax>
      </animated.div>
    );
  }
}

export default EventDetails;
