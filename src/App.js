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
import Home from "./components/home/Home";
import Pcn from "./components/pcn/Pcn";
import EventDetails from "./components/eventDetails/EventDetails";
import {getAnimatedFrom, getAnimatedTo, getAnimatedEnter} from "./components/home/animation"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Route
            render={({ location, ...rest }) => (
              <div className="App">
                <Transition
                  native
                  items={location}
                  keys={location.pathname.split("/")[1]}
                  initial={{position: "absolute", opacity: 0}}
                  from={getAnimatedFrom(location.pathname)}
                  enter={getAnimatedEnter(location.pathname)}
                  leave={getAnimatedTo(location.pathname)}
                >
                  {(loc, state) => style => (
                    <Switch location={state === "update" ? location : loc}>
                      <Route
                        exact
                        path="/"
                        render={props => <Home {...props} style={style} />}
                      />
                      <Route
                        exact
                        path="/events"
                        render={props => <EventDetails {...props} style={style} />}
                      />
                      <Route
                        path="/pcn"
                        render={props => (
                          <Pcn {...props} style={style} />
                        )}
                      />
                    </Switch>
                  )}
                </Transition>
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
