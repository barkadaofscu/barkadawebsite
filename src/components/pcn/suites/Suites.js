import React, { Component, useRef, useState, useEffect } from "react";
import { config } from "react-spring/renderprops";
import { PageTitle, PageSpan, Container, Row } from "../../shared/primitives";
import { useSprings, animated } from "react-spring";
import MediaQuery from "react-responsive";
import Grid from "../grid/Grid";
import { Slug, Fade } from "../grid/Primitives";
import data from "../grid/data";
import "../grid/styles.css";
import { Icon } from "antd";

class Cell extends Component {
  render() {
    const { toggle, name, dance, image, description, active } = this.props;
    return (
      <div
        className="cell"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          cursor: !active ? "pointer" : "auto"
        }}
        onClick={!active ? toggle : undefined}
      >
        <Fade show={active} delay={active ? 500 : 0}>
          <div className="details">
            <Slug delay={600}>
              <div className="close">
                <Icon
                  type="close"
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={toggle}
                />
              </div>
              <div className="danceDescription">
                <h1>{dance}</h1>
                <p>{description}</p>
              </div>
            </Slug>
          </div>
        </Fade>
        <Fade
          show={!active}
          from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
          enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
          leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
          delay={active ? 0 : 400}
        >
          <div className="default">
            <div style={{ zIndex: 1, fontSize: 40, color: "white" }}>
              {name}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

class Suites extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: "24px",
          overflow: "hidden"
        }}
      >
        <Container>
          <PageSpan>To be added</PageSpan>
        </Container>
        <div style={{ width: "95%", height: "95%", margin: "auto" }}>
          <MediaQuery query="(max-device-width: 1023px)">
            <Grid
              className="grid"
              // Arbitrary data, should contain keys, possibly heights, etc.
              data={data}
              // Key accessor, instructs grid on how to fet individual keys from the data set
              keys={d => d.name}
              // Can be a fixed value or an individual data accessor
              heights={150}
              // Number of columns
              columns={1}
              // Space between elements
              margin={0}
              // Removes the possibility to scroll away from a maximized element
              lockScroll={true}
              // Delay when active elements (blown up) are minimized again
              closeDelay={500}
              // Regular react-spring configs
              config={config.default}
            >
              {(data, active, toggle) => (
                <Cell {...data} active={active} toggle={toggle} />
              )}
            </Grid>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 1024px)">
            <Grid
              className="grid"
              data={data}
              keys={d => d.name}
              heights={d => d.height}
              columns={3}
              margin={0}
              lockScroll={true}
              closeDelay={500}
              config={config.default}
            >
              {(data, active, toggle) => (
                <Cell {...data} active={active} toggle={toggle} />
              )}
            </Grid>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Suites;
