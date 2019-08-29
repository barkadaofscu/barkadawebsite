import React, { Component, useState, useEffect } from "react";
import { config } from "react-spring/renderprops";
import { PageTitle, PageSpan, Container, Row } from "../../shared/primitives";
import MediaQuery from "react-responsive";
import Grid from "../../pcn/grid/Grid";
import { Slug, Fade } from "../../pcn/grid/Primitives";
import "../../pcn/grid/styles.css";
import { Icon } from "antd";


class Cell extends Component {
  render() {
    const { toggle, image,  active } = this.props;
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
          </div>
        </Fade>
      </div>
    );
  }
}

const Gallery = (props) => {
    return (
      <div style={{ width: "100%", height: "auto", overflow: "hidden", backgroundColor:"white" }}>
        <Row style={{ marginTop: 32 }}>
          <PageTitle>Gallery</PageTitle>
        </Row>
        <div style={{ width: "95%", minHeight: "100vh", marginLeft: "2.5%", paddingBottom: "24px" }}>
          <MediaQuery query="(max-device-width: 1023px)">
            <Grid
              className="grid"
              // Arbitrary data, should contain keys, possibly heights, etc.
              data={props.data}
              // Key accessor, instructs grid on how to fet individual keys from the data set
              keys={d => d.key}
              // Can be a fixed value or an individual data accessor
              heights={100}
              // Number of columns
              columns={2}
              // Space between elements
              margin={24}
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
              // Arbitrary data, should contain keys, possibly heights, etc.
              data={props.data}
              // Key accessor, instructs grid on how to fet individual keys from the data set
              keys={d => d.key}
              // Can be a fixed value or an individual data accessor
              heights={200}
              // Number of columns
              columns={6}
              // Space between elements
              margin={24}
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
        </div>
      </div>
    );
}

export default Gallery;
