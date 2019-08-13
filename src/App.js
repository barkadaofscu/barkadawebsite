import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Transition, animated, Spring } from "react-spring/renderprops";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import TopMenuBar from "./components/menubar/TopMenuBar";
import HomePage from "./components/home/HomePage";
import PcnHomePage from "./components/pcn/PcnHomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div className="leftSideMenu"></div>
          <div className="rightSideMenu"></div>
          <Route
            render={({ location, ...rest }) => (
              <div className="App">
                <TopMenuBar />
                <Transition
                  native
                  items={location}
                  keys={location.pathname.split("/")[1]}
                  from={{
                    position: "absolute",
                    width: "97.5%",
                    marginLeft: "100%"
                  }}
                  enter={[{ marginLeft: "1.25%" }]}
                  leave={{ marginLeft: "-100%" }}
                >
                  {(loc, state) => style => (
                    <Switch location={state === "update" ? location : loc}>
                      <Route
                        exact
                        path="/"
                        render={props => (
                          <HomePage {...props} style={style} />
                        )}
                      />
                      <Route
                        exact
                        path="/pcn"
                        render={props => (
                          <PcnHomePage {...props} style={style} />
                        )}
                      />
                    </Switch>
                  )}
                </Transition>
              </div>
            )}
          />
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
