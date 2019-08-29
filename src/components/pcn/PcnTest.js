import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageFade from "../shared/imagefade";
import MediaQuery from "react-responsive";
import About from "./about/About";
import Directors from "./directors";
import Suites from "./suites";
import logo from "../home/assets/logo.png";
import Gallery from "../shared/gallery";
import Footer from "./footer";
import about from "./assets/about.jpg";
import directors from "./assets/directors.jpg";
import suiteBanner from "./suites/assets/suite_banner.jpg";
import banner from "./assets/banner.png";
import verticalBanner from "./assets/home_vertical1.png";
import data from "./assets/landingPhotos/data";
import gallery from "./assets/gallery/data";
import {
  PageSpan,
  BoldSpan,
  PageTitle,
  Container,
  SmallLogo,
  Row,
  FixedColumn
} from "../shared/primitives/Primitives";
import { Icon } from "antd";
import "./styles.css";

const Title = styled.div`
  width: 80vw;
  height: auto;
  margin-left: 10vw;
  margin-right: 10vw;
  background: linear-gradient(to right, #312aa9, #79acd0);
`;

const ContentWhite = styled.div`
  width: 80vw;
  height: auto;
  margin-left: 10vw;
  text-align: left;
  textalign: center;
  background: rgba(255, 255, 255, 0.9);
`;
const Content = styled.div`
  width: 80vw;
  height: auto;
  margin-left: 10vw;
  text-align: left;
  textalign: center;
  background: rgba(255, 255, 255, 0.9);
`;
const NavText = styled.div`
  display: none;
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

class PcnTest extends Component {
  render() {
    return (
      <animated.div
        style={{
          ...this.props.style,
          height: "100vh",
          width: "100vw",
          overflowY: "hidden",
          overflowX: "hidden",
          zIndex: 3,
          padding: 0
        }}
      >
        <div style={{ height: "100vh", width: "100vw", overflowY: "hidden" }}>
          <ImageFade data={data} interval={3000} />
          <Parallax ref="parallax" pages={5}>
            <ParallaxLayer offset={0} speed={1}>
              <div
                style={{
                  width: "100vw",
                  height: "10vh",
                  marginTop: "85vh"
                }}
              >
                <p style={{ color: "white", fontSize: "24px", marginTop: 8 }}>
                  Scroll
                </p>
                <Icon
                  type="down"
                  style={{ color: "white", fontSize: "28px" }}
                />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
              <div style={{ width: "100%", height: "auto", marginTop: "24px" }}>
                <SmallLogo src={logo} />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
              <div
                style={{
                  width: "100px",
                  marginTop: "48px",
                  float: "left",
                  marginLeft: "24px"
                }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", verticaAlign: "top" }}
                >
                  <Row>
                    <FixedColumn>
                      <Icon
                        type="left"
                        style={{ color: "white", fontSize: "28px" }}
                      />
                    </FixedColumn>
                    <FixedColumn>
                      <MediaQuery query="(min-device-width: 768px)">
                        <p
                          style={{
                            color: "white",
                            fontSize: "24px",
                            padding: 0,
                            margin: 0
                          }}
                        >
                          Home
                        </p>
                      </MediaQuery>
                    </FixedColumn>
                  </Row>
                </Link>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.4} speed={0.5}>
              <p
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: 300,
                  padding: 0,
                  margin: 0
                }}
              >
                29th Annual Pilipino Culture Night
              </p>
              <PageTitle color="white" style={{ fontWeight: 300 }}>
                Pagyakap Sa Pananaw
              </PageTitle>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={3}>
              <Title>
                <h1 style={{ color: "white", padding: 24 }}>PCN 2019 Recap</h1>
              </Title>
              <Content style={{ height: "80vh" }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3PVL2AYxKM8"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Content>
              <Title style={{ marginTop: "10%" }}>
                <h1 style={{ color: "white", padding: 24 }}>About</h1>
              </Title>
              <Content>
                <About />
              </Content>
              <Title style={{ marginTop: "10%" }}>
                <h1 style={{ color: "white", padding: 24 }}>
                  From the Directors
                </h1>
              </Title>
              <Content>
                <Directors />
              </Content>
              <Title style={{ marginTop: "10%" }}>
                <h1 style={{ color: "white", padding: 24 }}>
                  Dance Suites of PCN
                </h1>
              </Title>
              <Content>
                <Suites />
              </Content>
              <Title style={{ marginTop: "10%" }}>
                <h1 style={{ color: "white", padding: 24 }}>Gallery</h1>
              </Title>
              <Content></Content>
            </ParallaxLayer>
          </Parallax>
        </div>
      </animated.div>
    );
  }
}

export default PcnTest;
