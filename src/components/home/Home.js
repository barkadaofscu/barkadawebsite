import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { PageTitle, Logo, PageTag, PageSpan, Row, Column } from "./Primitives";
import ImageFade from "./ImageFade";
import Card from "./events/Card";
import About from "./about/About";
import Events from "./events/Events";
import Membership from "./membership/Membership";
import Outreach from "./outreach/Outreach";
import Footer from "./Footer"
import Masonry from "./masonry/Masonry";
import about1 from "./assets/about1.JPG";
import logo from "./assets/logo.png";
import { Icon } from "antd";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <animated.div
        style={{
          ...this.props.style,
          height: "100vh",
          overflowY: "scroll",
          zIndex: 3,
          padding: 0
        }}
      >
        <div style={{ height: "100vh", width: "100vw" }}>
          <ImageFade />
          <div style={{ width: "100%", height: "100%", zIndex: 4 }}>
            <div style={{ width: "50%", height: "50%", marginLeft: "25%", marginRight: "25%" }}>
              <Logo
                src={logo}
              />
            </div>
            <Row style={{ marginTop: "15%" }}>
              <Column>
                <p style={{ color: "white", fontSize: "24px", marginTop: 8 }}>Scroll down for more</p>
                <Icon
                  type="down"
                  style={{ color: "white", fontSize: "36px" }}
                />
              </Column>
              <Column>
                <Link to="/pcn" style={{textDecoration: "none"}}>
                  <p style={{ color: "white", fontSize: "24px", marginTop: 8 }}>PCN</p>
                  <Icon
                    type="right"
                    style={{ color: "white", fontSize: "36px" }}
                  />
                </Link>
              </Column>
            </Row>
          </div>
        </div>
        <About />
        <Membership />
        <Events />
        <Outreach />
        <Footer />
      </animated.div>
    );
  }
}

export default Home;
