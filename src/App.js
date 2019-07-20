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
import HomePage from './components/info/HomePage';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <TopMenuBar />
          <div className="leftSideMenu"></div>
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
