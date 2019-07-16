import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import TopMenuBar from "./components/menubar/TopMenuBar";
import banner from "./assets/banner.png";
import SuiteOverview from "./components/suites/SuiteOverview";
import SuiteSpotlight from './components/suites/SuiteSpotlight'
import SuiteGroupTitle from "./components/suites/SuiteGroupTitle";
import SuiteInfo from "./components/suites/SuiteInfo";
import AboutPage from "./components/info/AboutPage";
import HomePage from './components/info/HomePage';
import about from "./assets/about.jpg";
import mariaclara from "./components/suites/assets/maria_clara.jpg";
import mountain from "./components/suites/assets/mountain.jpg";
import modern from "./components/suites/assets/modern.jpg";
import tribal from "./components/suites/assets/tribal.jpg";
import muslim from "./components/suites/assets/muslim.jpg";
import rural from "./components/suites/assets/rural.jpg";
import barkadaLogo from "./assets/logo.png";
import bLogo from "./assets/logo1.png";
import "./App.css";

class App extends Component {
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
      <Router basename="/">
        <div className="App">
          <TopMenuBar />
          <div className="leftSideMenu"></div>{" "}
              <div className="rightSideMenu"></div>
                <HomePage />
              
          <div
            style={{
              width: "100%",
              height: "40px",
              position: "fixed",
              bottom: "0",
              backgroundColor: "white"
            }}
          ></div>
        </div>
      </Router>
    );
  }
}

export default App;
