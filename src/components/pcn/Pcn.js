import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import About from "./about/About";
import Directors from "./directors";
import Suites from "./suites";
import Gallery from "../shared/gallery"
import Footer from "./footer";
import about from "./assets/about.jpg";
import directors from "./assets/directors.jpg";
import suiteBanner from "./suites/assets/suite_banner.jpg";
import banner from "./assets/banner.png";
import verticalBanner from "./assets/home_vertical1.png";
import data from "./assets/gallery/data"
import { Icon } from "antd";
import "./styles.css";

class PcnTest extends Component {
  render() {
    return (
      <animated.div
        className="box"
        style={{ ...this.props.style, overflow: "hidden" }}
      >
        <Parallax ref="parallax" pages={7}>
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
              <div className="bg" style={{ backgroundImage: `url(${banner})` }}>
                <div
                  style={{
                    background: `rgba(0,0,0,0.1)`,
                    height: "100%",
                    overflow: "hidden"
                  }}
                ></div>
              </div>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
              <div
                className="bg"
                style={{ backgroundImage: `url(${verticalBanner})` }}
              ></div>
            </MediaQuery>
          </ParallaxLayer>
          <ParallaxLayer offset={0.4} speed={0.5}>
            <div style={{ float: "left", marginLeft: "24px" }}>
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
          <ParallaxLayer factor={1} offset={1} speed={1}>
              <About />
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={2} speed={1}>
            <Directors />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={1}
            speed={1}
          >
            <Suites />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5}>
            <Gallery data={data} />
          </ParallaxLayer>
          <ParallaxLayer offset={6} speed={0.5}>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </animated.div>
    );
  }
}

export default PcnTest;
