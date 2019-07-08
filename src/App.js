import React, { Component } from "react";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner
} from "react-scroll-parallax";
import banner from "./assets/banner.png";
import SuiteOverview from "./components/suites/SuiteOverview";
import SuiteGroupTitle from "./components/suites/SuiteGroupTitle";
import SuiteInfo from "./components/suites/SuiteInfo";
import About from "./components/info/about";
import mariaclara from './components/suites/assets/maria_clara.jpg'
import mountain from "./components/suites/assets/mountain.jpg";
import modern from './components/suites/assets/modern.jpg'
import tribal from './components/suites/assets/tribal.jpg'
import muslim from './components/suites/assets/muslim.jpg'
import rural from './components/suites/assets/rural.jpg'
import barkadaLogo from "./assets/logo.png";
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
          <SuiteInfo title="Mantones " background={mariaclara} />
          <SuiteGroupTitle title="Mountain" />
          <SuiteInfo title="Budong" background={mountain} />
          <SuiteGroupTitle title="Modern" />
          <SuiteInfo title="What's Luv?" background={modern} />
          <SuiteGroupTitle title="Tribal" />
          <SuiteInfo title="Dumadel" background={tribal} />
          <SuiteGroupTitle title="Muslim" />
          <SuiteInfo title="Singkil" background={muslim} />
          <SuiteGroupTitle title="Rural" />
          <SuiteInfo title="Tinikling" background={rural} />

        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
