import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import MediaQuery from "react-responsive";
import AboutPage from "./AboutPage";
import MobileAboutPage from "../mobile/MobileAboutPage";
import DirectorPage from "../directors/DirectorPage";
import SuiteOverview from "../suites/SuiteOverview";
import Footer from "../info/Footer";
import about from "./assets/about.jpg";
import aboutVertical from "./assets/about_v.jpeg"
import directors from "./assets/directors.jpg";
import suiteBanner from "../suites/assets/suite_banner.jpg";
import banner from "./assets/banner.png";
import verticalBanner from "./assets/home_vertical1.png";
import "./styles.css";

class HomePage extends Component {
  render() {
    return (
      <animated.div
        className="box"
        style={{ ...this.props.style, overflow: "hidden" }}
      >
        <Parallax ref="parallax" pages={5}>
          <ParallaxLayer
            offset={0.5}
            speed={0.25}
            style={{
              width: "97.5%",
              marginLeft: "1.25%"
            }}
          >
            <MediaQuery minWidth={1224}>
              <img
                src={about}
                alt="About Banner"
                style={{ overflow: "hidden", height: "auto", width: "100%" }}
              />
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
              <img
                src={aboutVertical}
                alt="About Mobile Banner"
                style={{ overflow: "hidden", height: "100vh", width: "100%" }}
              />
            </MediaQuery>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.5}
            speed={0.25}
            style={{
              width: "97.5%",
              marginLeft: "1.25%"
            }}
          >
            <img
              src={directors}
              alt="Directors parallax"
              style={{ overflow: "hidden", height: "auto", width: "100%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.5}
            factor={1}
            speed={0.25}
            style={{
              width: "97.5%",
              marginLeft: "1.25%"
            }}
          >
            <img
              src={suiteBanner}
              alt="Suite Banner"
              style={{ width: "100%", height: "auto", overflow: "hidden" }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={1}
            style={{ backgroundColor: "#243B4A" }}
          ></ParallaxLayer>
          <ParallaxLayer
            factor={1}
            offset={0}
            speed={0.5}
            style={{
              height: "100%",
              width: "97.5%",
              marginLeft: "1.25%"
            }}
          >
            <MediaQuery minWidth={1224}>
              <img
                src={banner}
                alt="Home Banner"
                style={{ overflow: "hidden", height: "auto", width: "100%" }}
              />
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
              <img
                src={verticalBanner}
                alt="Home Banner"
                style={{ overflow: "hidden", height: "auto", width: "100%" }}
              />
            </MediaQuery>
          </ParallaxLayer>
          <ParallaxLayer
            factor={1}
            offset={1}
            speed={1}
            style={{
              height: "100%",
              width: "97.5%",
              marginLeft: "1.25%"
            }}
          >
            <MediaQuery minWidth={1224}>
              <AboutPage/>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
              <MobileAboutPage/>
            </MediaQuery>
          </ParallaxLayer>
          <ParallaxLayer
            factor={1}
            offset={2}
            speed={1}
            style={{
              height: "100%",
              width: "97.5%",
              marginLeft: "1.25%"
            }}
          >
            <DirectorPage />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={1.5}
            speed={1}
            style={{
              width: "97.5%",
              marginLeft: "1.25%",
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

export default HomePage;
