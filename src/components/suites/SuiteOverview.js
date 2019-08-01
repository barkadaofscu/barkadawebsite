import React, { Component } from "react";
import { Transition, animated, Spring, config } from "react-spring/renderprops";
import mountain from "./assets/mountain.jpg";
import mariaclara from "./assets/maria_clara.jpg";
import modern from "./assets/modern.jpg";
import muslim from "./assets/muslim.jpg";
import rural from "./assets/rural.jpg";
import tribal from "./assets/tribal.jpg";
import Grid from "../grid/Grid";
import { Slug, Fade } from "../grid/Primitives";
import data from "../grid/data";
import "../grid/styles.css";
import { Icon } from "antd";

class Cell extends Component {
  render() {
    const { toggle, name, image, description, css, active } = this.props;
    return (
      <div
        className="cell"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", cursor: !active ? "pointer" : "auto" }}
        onClick={!active ? toggle : undefined}
      >
        <Fade show={active} delay={active ? 500 : 0}>
          <div className="details">
            <Slug delay={600}>
              <div className="close">
                <Icon
                  type="close"
                  style={{ cursor: "pointer" }}
                  onClick={toggle}
                />
              </div>
              <h1>{name}</h1>
              <p>{description}</p>
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
            <div style={{ zIndex: 1, fontSize: 40, color: "white" }}>{name}</div>
          </div>
        </Fade>
      </div>
    );
  }
}

const SuiteOverview = () => (
  <div style={{ width: "100%", minHeight: "100vh" }}>
    <h1 className="pageTitle">Suites</h1>
    <p className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
      pretium nunc. Integer efficitur libero purus, et hendrerit ligula
      imperdiet vitae. Maecenas eu interdum est. Quisque a mauris ac dui
      vestibulum pretium. Aenean ac posuere orci, a luctus tellus. Maecenas
      vestibulum vitae massa vel auctor. Nullam id risus ullamcorper, malesuada
      orci sit amet, fermentum enim. Pellentesque pulvinar mauris at dolor
      pulvinar aliquet sit amet non dolor.
    </p>
    <Grid
      className="grid"
      // Arbitrary data, should contain keys, possibly heights, etc.
      data={data}
      // Key accessor, instructs grid on how to fet individual keys from the data set
      keys={d => d.name}
      // Can be a fixed value or an individual data accessor
      heights={d => d.height}
      // Number of columns
      columns={2}
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
  </div>
);

export default SuiteOverview;
