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
import MenuBar from "./components/menubar/MenuBar";
import Main from "./components/home/Main";
import HomePage from "./components/home/HomePage";
import PcnHomePage from "./components/pcn/PcnHomePage";
import Events from "./components/home/events/Events";
import {getAnimatedFrom, getAnimatedTo, getAnimatedEnter} from "./components/home/animation"
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
                <MenuBar location={location} />
                <Transition
                  native
                  items={location}
                  keys={location.pathname.split("/")[1]}
                  from={getAnimatedFrom(location.pathname)}
                  enter={getAnimatedEnter(location.pathname)}
                  leave={getAnimatedTo(location.pathname)}
                >
                  {(loc, state) => style => (
                    <Switch location={state === "update" ? location : loc}>
                      <Route
                        exact
                        path="/"
                        render={props => <HomePage {...props} style={style} />}
                      />
                      <Route
                        exact
                        path="/events"
                        render={props => <Events {...props} style={style} />}
                      />
                      <Route
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
          <div className="bottomSideMenu"></div>
        </div>
      </Router>
    );
  }
}

export default App;
