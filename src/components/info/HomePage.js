import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Route, Link, Redirect } from "react-router-dom";
import AboutPage from "./AboutPage";
import SuiteOverview from '../suites/SuiteOverview'
import SuiteSpotlight from "../suites/SuiteSpotlight";
import about from "./assets/about.jpg";
import mountain from "../suites/assets/mountain.jpg";
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
        <Parallax ref="parallax" pages={3}>
          <ParallaxLayer
            offset={0.5}
            speed={0.3}
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
            factor={1}
            offset={0}
            speed={1}
            style={{
              width: "97.5%"
            }}
          >
            <img
              src={banner}
              style={{ overflow: "hidden", height: "97.5%", width: "100%" }}
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
            offset={1.6}
            speed={2}
            style={{
              marginLeft: "50%",
              width: "100%",
              height: "100%"
            }}
          >
            {/*
            
           <div
              style={{
                width: "47.5%",
                height: "22.5%",
                backgroundColor: "white"
              }}
            ></div>     */}
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.75}
            factor={1}
            speed={0.75}
            style={{
              width: "97.5%"
            }}
          >
            <img
              src={mountain}
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
            />
          </ParallaxLayer>{" "}
          <ParallaxLayer
            offset={2}
            factor={1}
            speed={1}
            style={{
              width: "97.5%",
              backgroundColor: "#805E73"
            }}
        >
            <SuiteOverview />
        </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={2}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(1)}
          >
            Click to Scroll!
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={-0.1}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(2.75)}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(0)}
          ></ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default HomePage;
