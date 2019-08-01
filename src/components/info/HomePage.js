import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Transition, animated, Spring } from "react-spring/renderprops";
import { Route, Link, Redirect } from "react-router-dom";
import AboutPage from "./AboutPage";
import DirectorPage from "../directors/DirectorPage";
import SuiteOverview from "../suites/SuiteOverview";
import about from "./assets/about.jpg";
import directors from "./assets/directors.jpg";
import suiteBanner from "../suites/assets/suite_banner.jpg";
import banner from "./assets/banner.png";
import "./styles.css"

class HomePage extends Component {
  render() {
    return (
      <animated.div
        className="box"
        style={{ ...this.props.style, overflow: "hidden" }}
      >
        <Parallax pages={5}>
          <ParallaxLayer
            offset={0.5}
            speed={0.25}
            style={{
              width: "97.5%"
            }}
          >
            <img
              src={about}
              style={{ overflow: "hidden", height: "auto", width: "100%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.5}
            speed={0.25}
            style={{
              width: "97.5%"
            }}
          >
            <img
              src={directors}
              style={{ overflow: "hidden", height: "auto", width: "100%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.5}
            factor={1}
            speed={0.25}
            style={{
              width: "97.5%"
            }}
          >
            <img
              src={suiteBanner}
              style={{ width: "100%", height: "auto", overflow: "hidden" }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            factor={1}
            offset={0}
            speed={0.5}
            style={{
              height: "100%",
              width: "97.5%"
            }}
          >
            <img
              src={banner}
              style={{ overflow: "hidden", height: "auto", width: "100%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            factor={1}
            offset={1}
            speed={1}
            style={{
              height: "100%",
              width: "97.5%"
            }}
          >
            <AboutPage />
          </ParallaxLayer>
          <ParallaxLayer
            factor={1}
            offset={2}
            speed={1}
            style={{
              height: "100%",
              width: "97.5%"
            }}
          >
            <DirectorPage />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={2}
            speed={1}
            style={{
              width: "97.5%",
              minHeight: "100vh",
              backgroundColor: "white"
            }}
          >
            <SuiteOverview />
          </ParallaxLayer>
        </Parallax>
      </animated.div>
    );
  }
}

export default HomePage;
