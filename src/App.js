import React, { Component } from "react";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner
} from "react-scroll-parallax";
import banner from "./assets/banner.png";
import navBar from "./components/menubar/navBar";
import SuiteOverview from "./components/suites/SuiteOverview";
import SuiteGroupTitle from "./components/suites/SuiteGroupTitle";
import SuiteInfo from "./components/suites/SuiteInfo";
import About from "./components/info/about";
import Suite from "./components/suites/Suite";
import SuiteBanner from "./components/suites/SuiteBanner";
import mountain from "./components/suites/assets/mountain.jpg";
import barkadaLogo from "./assets/logo.png";
import barkadaLogo1 from "./assets/logo1.png";
import menuicon from "./assets/menuicon.png";
import Banner from "./components/banner/banner";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            top: 0,
            left: 0,
            overflow: "hidden"
          }}
        >
          <ParallaxBanner
            style={{
              height: "100vh"
            }}
            layers={[
              {
                children: (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100vh",
                      backgroundSize: "cover",
                      overflow: "hidden",
                      backgroundImage: `url(${banner})`
                    }}
                  >
                    <img
                      src={barkadaLogo}
                      style={{
                        marginLeft: "10px",
                        marginTop: "30px",
                        position: "relative",
                        width: "200px",
                        height: "auto"
                      }}
                    />
                  </div>
                ),
                amount: 0.6,
                expanded: false
              }
            ]}
          />
          <About />

          <SuiteOverview />
          <SuiteGroupTitle title="Maria Clara" />
          <SuiteInfo title="Mantones " background={mountain} />
          <SuiteGroupTitle title="Mountain" />
          <SuiteInfo title="Budong" background={mountain} />
          <SuiteGroupTitle title="Maria Clara" />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
