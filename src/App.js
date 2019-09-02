import React, { Component } from "react";
import { Transition } from "react-spring/renderprops";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import PcnTest from "./components/pcn";
import EventDetails from "./components/eventDetails/EventDetails";
import Kaa from "./components/kaa";
import Fg from "./components/friendshipGames";
import Barrio from "./components/barrio";
import Eotyd from "./components/eotyd";
import {
  getAnimatedFrom,
  getAnimatedTo,
  getAnimatedEnter
} from "./components/shared/animation";
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
                  delay={1000}
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
                        render={props => <Home {...props} style={style} />}
                      />
                      <Route
                        exact
                        path="/events"
                        render={props => (
                          <EventDetails {...props} style={style} />
                        )}
                      />
                      <Route
                        exact
                        path="/kaa"
                        render={props => <Kaa {...props} style={style} />}
                      />
                      <Route
                        exact
                        path="/fg"
                        render={props => <Fg {...props} style={style} />}
                      />
                      <Route
                        exact
                        path="/barrio"
                        render={props => <Barrio {...props} style={style} />}
                      />
                      <Route
                        exact
                        path="/eotyd"
                        render={props => <Eotyd {...props} style={style} />}
                      />
                      <Route
                        path="/pcn"
                        render={props => <PcnTest {...props} style={style} />}
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
