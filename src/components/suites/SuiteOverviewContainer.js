import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import SuiteOverview from "./SuiteOverview";
import SuiteSpotlight from "./SuiteSpotlight";

const SuiteOverviewContainer = () => (
      <div style={{ width: "100%", height: "100vh" }}>
              <Route exact path="/" render={SuiteOverview} />
              <Route path="/mountain" render={SuiteSpotlight}/>
      </div>
)

export default SuiteOverviewContainer;
