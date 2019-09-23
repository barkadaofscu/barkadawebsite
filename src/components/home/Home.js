import React, { Component } from "react";
import { animated } from "react-spring/renderprops";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  Content,
  PageTitle,
  Logo,
  Row,
  FixedColumn
} from "../shared/primitives/Primitives";
import ImageFade from "../shared/imagefade/ImageFade";
import About from "./about";
import Events from "./events";
import Membership from "./membership";
import Outreach from "./outreach";
import Footer from "./footer";
import photoArr from "./assets/HomePhotos";
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
        <div style={{ height: "100vh", width: "100vw", overflowY: "scroll" }}>
          <ImageFade data={photoArr} interval={5000} />
          <div style={{ width: "100%", height: "100%", zIndex: 4 }}>
            <div style={{ width: "100%", height: "50%" }}>
              <Logo src={logo} />
            </div>
            <div
              style={{
                width: "100px",
                height: "auto",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block"
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: 400,
                  padding: 0,
                  margin: 0
                }}
              >
                Welcome
              </p>
            </div>
            <Row style={{ marginTop: "5%" }}>
              <FixedColumn>
                <div
                  style={{
                    width: "25vw",
                    height: "100%",
                    marginLeft: "5vw",
                    display: "inline-block",
                    float: "left"
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "24px",
                      marginTop: 8
                    }}
                  >
                    Scroll
                  </p>
                  <Icon
                    type="down"
                    style={{ color: "white", fontSize: "28px" }}
                  />
                </div>
              </FixedColumn>
              <FixedColumn>
                <div
                  style={{
                    width: "100px",
                    marginTop: "12px",
                    float: "right",
                    marginRight: "10vw"
                  }}
                >
                  <Link
                    to="/pcn"
                    style={{ textDecoration: "none", verticaAlign: "top" }}
                  >
                    <Row>
                      <FixedColumn>
                        <p
                          style={{
                            color: "white",
                            fontSize: "24px",
                            padding: 0,
                            marginTop: 0,
                            marginLeft: "auto",
                            marginRight: "12px"
                          }}
                        >
                          PCN
                        </p>
                      </FixedColumn>
                      <FixedColumn>
                        <Icon
                          type="right"
                          style={{
                            color: "white",
                            marginLeft: "24px",
                            fontSize: "28px"
                          }}
                        />
                      </FixedColumn>
                    </Row>
                  </Link>
                </div>
              </FixedColumn>
            </Row>
          </div>
          <div style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}>
            <About />
            <Membership />
            <Events />
            <Outreach />
            <Footer />
          </div>
        </div>
      </animated.div>
    );
  }
}
export default Home;
