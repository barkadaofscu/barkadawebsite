import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import {
  PageSpan,
  BoldSpan,
  PageTitle,
  Container,
  Row,
  FixedColumn
} from "../shared/primitives/Primitives";
import logo from "../shared/images/logo.png";
import ImageFade from "../shared/imagefade/ImageFade";
import styled from "styled-components";
import data from "./assets/data";

const Title = styled.div`
  width: 80vw;
  height: auto;
  margin-left: 10vw;
  margin-right: 10vw;
  background: linear-gradient(to right, #312aa9, #79acd0);
`;

const Content = styled.div`
  width: 80vw;
  height: auto;
  margin-left: 10vw;
  text-align: left;
  textalign: center;
  background: rgba(64, 64, 64, 0.9);
`;
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
              <Title>
                <img
                  src={logo}
                  style={{ width: "auto", height: "5vh", padding: "2vh" }}
                />
              </Title>
              <Content>
                <PageTitle
                  color="white"
                  style={{ textAlign: "center", padding: "5%" }}
              >
                  End of the Year Dinner
                </PageTitle>
              </Content>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={3}>
              <Title>
                <h1 style={{ color: "white", padding: 24 }}>
                  What is Eotyd?
                </h1>
              </Title>
              <Content style={{ marginTop: "5vh" }}>
                <div float="center" style={{ padding: "5%" }}>
                  <PageSpan color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nisi velit, dignissim eget fringilla ac, mattis at
                    sem. Duis non tortor et mauris placerat facilisis.
                    Pellentesque eget congue ante, quis auctor nulla. Vestibulum
                    congue, est eget cursus ultricies, augue massa commodo
                    velit, sed viverra libero erat ac purus.
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
