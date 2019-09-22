import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import {
  PageSpan,
  Container,
  Content,
  Title,
  PageTitle,
  Row,
  FixedColumn
} from "../shared/primitives/Primitives";
import logo from "../shared/images/logo.png";
import eotyd from "./assets/eotyd.png";
import ImageFade from "../shared/imagefade/ImageFade";
import data from "./assets/data";

class Eotyd extends Component {
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
          <ImageFade data={data} interval={4000} />
          <Parallax ref="parallax" pages={3}>
            <ParallaxLayer offset={0} speed={1}>
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
                    </FixedColumn>
                  </Row>
                </Link>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.3} speed={1}>
              <Title style={{ padding: "0px", marginTop: 0, marginBottom: 0 }}>
                <img
                  src={logo}
                  style={{ width: "auto", height: "5vh", padding: "2vh" }}
                />
              </Title>
              <Content style={{ marginTop: 0 }}>
                <PageTitle
                  color="white"
                  style={{ textAlign: "center", padding: "5%" }}
                >
                  End of the Year Dinner
                </PageTitle>
              </Content>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={3}>
              <Title>What is EOTYD?</Title>
              <Content>
                <img src={eotyd} style={{ width: "100%", height: "100%" }} />
                <Container>
                  <PageSpan color="white" style={{ paddingBottom: "12px" }}>
                    2019 Theme
                  </PageSpan>
                </Container>
              </Content>
              <Content>
                <div float="center" style={{ padding: "5%" }}>
                  <PageSpan color="white">
                    Come join Barkada for our annual End of the Year
                    Dinner where we celebrate the good times, new friendships,
                    and old friendships as we eat together, and send off the
                    graduating senior class. Bring your friends and Barkada fam
                    for a fantastic night, where we will hand out superlative
                    awards and senior awards as well as experience music,
                    dancing, fun, and emotional moments together.{" "}
                  </PageSpan>
                </div>
              </Content>
            </ParallaxLayer>
          </Parallax>
        </div>
      </animated.div>
    );
  }
}

export default Eotyd;
