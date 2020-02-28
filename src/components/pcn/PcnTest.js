import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ImageFade from "../shared/imagefade";
import MediaQuery from "react-responsive";
import About from "./about/About";
import Directors from "./directors";
import Suites from "./suites";
import logo from "../home/assets/logo.png";
import data from "./assets/landingPhotos/data";
import gallery from "./assets/gallery/data";
import {
  PageSpan,
  Title,
  PageTitle,
  Content,
  SmallLogo,
  Row,
  FixedColumn
} from "../shared/primitives/Primitives";
import { Icon } from "antd";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          <ImageFade data={data} interval={5000} />
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
                    fontSize: 24,
                  fontWeight: 500,
                  padding: 0,
                  margin: 0
                }}
              >
                30th Annual Pilipino Culture Night
              </p>
              <PageTitle color="white" style={{ fontWeight: 300 }}>
                Tulay Sa Nakaraan
              </PageTitle>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={3}>
              <Title>PCN 2019 Recap</Title>
              <Content
                style={{
                  height: "80vh",
                  background: `rgba(255, 255, 255,0.9)`
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3PVL2AYxKM8"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Content>
              <Title>About</Title>
              <Content style={{ background: `rgba(255, 255, 255,0.8)` }}>
                <About />
              </Content>
              <Title>From the Directors</Title>
              <Content style={{ background: `rgba(255, 255, 255,0.8)` }}>
                <Directors />
              </Content>
              <Title>Dance Suites of PCN</Title>
              <Content style={{ background: `rgba(255, 255, 255,0.8)` }}>
                <Suites />
              </Content>
              <Title
                style={{
                  marginTop: "10%"
                }}
              >
                Gallery
              </Title>
              <Content style={{ background: "none" }}>
                <Carousel
                  swipeable
                  axis="horizontal"
                  showIndicators={false}
                >
                  {gallery.map((data, index) => (
                    <div key={index}>
                      <img src={data.image} />
                    </div>
                  ))}
                </Carousel>
              </Content>
            </ParallaxLayer>
          </Parallax>
        </div>
      </animated.div>
    );
  }
}

export default PcnTest;
