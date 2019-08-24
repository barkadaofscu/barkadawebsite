import React, { Component } from "react";
import { animated } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import { Logo, Row, FixedColumn } from "../shared/primitives/Primitives";
import ImageFade from "../shared/imagefade/ImageFade";
import About from "./about";
import Events from "./events";
import Membership from "./membership";
import Outreach from "./outreach";
import Footer from "./footer";
import Kaa from "../kaa"
import photoArr from "./assets/HomePhotos"
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
          width: "100vw",
          overflowY: "scroll",
          overflowX: "hidden",
          zIndex: 3,
          padding: 0
        }}
      >
        <div style={{ height: "100vh", width: "100vw" }}>
          <ImageFade data={photoArr}/>
          <div style={{ width: "100%", height: "100%", zIndex: 4 }}>
            <div style={{ width: "100%", height: "50%" }}>
              <Logo src={logo} />
            </div>
            <Row style={{ marginTop: "10%" }}>
              <FixedColumn >
                <div
                  style={{
                    width: "25vw",
                    height: "100%",
                    marginLeft: "5vw",
                    display: "inline-block",
                    float: "left"
                  }}
                >
                  <p style={{ color: "white", fontSize: "20px", marginTop: 8 }}>
                    Scroll
                  </p>
                  <Icon
                    type="down"
                    style={{ color: "white", fontSize: "32px" }}
                  />
                </div>
              </FixedColumn>
              <FixedColumn >
                <div
                  style={{
                    width: "25vw",
                    height: "100%",
                    float: "right",
                    display: "inline-block",
                    marginRight: "5vw"
                  }}
                >
                  <Link to="/pcn" style={{ textDecoration: "none" }}>
                    <p
                      style={{ color: "white", fontSize: "20px", marginTop: 8 }}
                    >
                      PCN
                    </p>
                    <Icon
                      type="right"
                      style={{ color: "white", fontSize: "32px" }}
                    />
                  </Link>
                </div>
              </FixedColumn>
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
