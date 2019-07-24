import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Route, Link, Redirect } from "react-router-dom";
import AboutPage from "./AboutPage";
import DirectorPage from "../directors/DirectorPage";
import SuiteOverview from "../suites/SuiteOverview";
import SuiteSpotlight from "../suites/SuiteSpotlight";
import about from "./assets/about.jpg";
import directors from "./assets/directors.jpg";
import mountain from "../suites/assets/mountain.jpg";
import suiteBanner from "../suites/assets/suite_banner.jpg";
import banner from "./assets/banner.png";
import "./styles.css";

class HomePage extends Component {
  render() {
    const styles = {
      fontFamily: "Menlo-Regular, Menlo, monospace",
      fontSize: 14,
      marginTop: "19%",
      lineHeight: "10px",
      color: "white",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
      <div className="box">
        <Parallax ref="parallax" pages={5}>
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
            factor={1}
            speed={1}
            style={{
              width: "97.5%",
              height: "auto",
              backgroundColor: "white"
            }}
          >
            <SuiteOverview />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default HomePage;
