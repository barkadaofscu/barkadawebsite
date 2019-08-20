import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import MediaQuery from "react-responsive";
import AboutPage from "./info/AboutPage";
import MobileAboutPage from "./mobile/MobileAboutPage";
import DirectorPage from "./directors/DirectorPage";
import SuiteOverview from "./suites/SuiteOverview";
import Footer from "./info/Footer";
import about from "./assets/about.jpg";
import aboutVertical from "./assets/about_v.jpeg";
import directors from "./assets/directors.jpg";
import suiteBanner from "./suites/assets/suite_banner.jpg";
import banner from "./assets/banner.png";
import verticalBanner from "./assets/home_vertical1.png";
import "./styles.css";

class PcnHomePage extends Component {
  render() {
    return (
      <animated.div
        className="box"
        style={{ ...this.props.style, overflow: "hidden" }}
      >
        <Parallax ref="parallax" pages={5}>
          <ParallaxLayer offset={0.75} speed={0.5}>
            <div
              className="bg"
              style={{ backgroundImage: `url(${about})` }}
            ></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.75} speed={0.5}>
            <div
              className="bg"
              style={{ backgroundImage: `url(${directors})` }}
            ></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.75} factor={1} speed={0.5}>
            <div
              className="bg"
              style={{ backgroundImage: `url(${suiteBanner})` }}
            ></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={1}
            style={{ backgroundColor: "#243B4A" }}
          ></ParallaxLayer>
          <ParallaxLayer factor={1} offset={0} speed={1}>
            <MediaQuery minWidth={1224}>
              <div
                className="bg"
                style={{ backgroundImage: `url(${banner})` }}
              ></div>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
              <div
                className="bg"
                style={{ backgroundImage: `url(${verticalBanner})` }}
              ></div>
            </MediaQuery>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={1} speed={1}>
            <MediaQuery minWidth={1224}>
              <AboutPage />
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
              <MobileAboutPage />
            </MediaQuery>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={2} speed={1}>
            <DirectorPage />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={1.5}
            speed={1}
            style={{
              minHeight: "100vh",
              backgroundColor: "white"
            }}
          >
            <SuiteOverview />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5}>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </animated.div>
    );
  }
}

export default PcnHomePage;
