import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import EventDetails from "./events/EventDetails";

class Main extends Component {
  render() {
    return (
      <animated.div
        style={{
          ...this.props.style,
          overflowY: "scroll",
          zIndex: 3,
          padding: 0
        }}
      >
        <Route
          render={({ location }) => (
            <div>
              <Transition
                native
                items={location}
                keys={location.pathname}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
              >
                {(loc, state) => style => (
                  <Switch location={loc}>
                    <Route
                      exact
                      path="/"
                      render={props => <HomePage {...props} style={style} />}
                    />
                    <Route
                      exact
                      path="/events"
                      render={props => (
                        <EventDetails {...props} style={style} />
                      )}
                    />
                  </Switch>
                )}
              </Transition>
            </div>
          )}
        />
      </animated.div>
    );
  }
}

export default Main;
