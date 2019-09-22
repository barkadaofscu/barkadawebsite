import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import {
  PageSpan,
  BoldSpan,
  PageTitle,
  Title,
  Content,
    Container,
    SmallLogo,
  Row,
  FixedColumn
} from "../shared/primitives/Primitives";
import ImageFade from "../shared/imagefade/ImageFade";
import kaamponents from "./assets/kaamponents.png";
import photoArr from "./assets/data";
import logo from "../home/assets/logo.png";

class Kaa extends Component {
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
          <ImageFade data={photoArr} interval={5000} />
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
              <PageTitle color="white" style={{ fontWeight: 300 }}>
               KAA 
              </PageTitle>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={3}>
              <Title>KAA What?</Title>
              <Content style={{ height: "80vh" }}>
                <iframe
                  width="100%"
                  height="90%"
                  src="https://www.youtube.com/embed/sVO4-jciJnI"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Container float="center">
                  <PageSpan color="white">
                    <BoldSpan>KAA 2018</BoldSpan>
                  </PageSpan>
                </Container>
              </Content>
              <Content >
                <div style={{ width: "90%", height: "90%", padding: "5%" }}>
                  <PageSpan color="white">
                    Welcome to the Kuya Ate Ading Program!
                  </PageSpan>
                  <PageSpan color="white">
                    KAA is Barkada's big/little mentorship program.
                    For years, the KAA program has brought lifetime friendships,
                    endless love, and unforgettable memories.
                  </PageSpan>
                  <PageSpan color="white">
                      Kuya, Ate, and Ading are Tagalog words that mean:
                  </PageSpan>
                  <PageSpan color="white">
                    <BoldSpan>Kuya</BoldSpan> (KOO-yah) = Tagalog for big
                    brother and
                  </PageSpan>
                  <PageSpan color="white">
                    <BoldSpan>Ate</BoldSpan> (AH-teh) = Tagalog for big sister.
                  </PageSpan>
                  <PageSpan color="white">
                    <BoldSpan>Ading</BoldSpan> (AH-ding) = younger sibling.
                  </PageSpan>
                  <PageSpan color="white">We are all family here.</PageSpan>
                </div>
              </Content>
              <Title>How to KAA:</Title>
              <Content>
                <div style={{ width: "90%", height: "90%", padding: "5%" }}>
                  <PageSpan color="white">
                    Come to{" "}
                    <BoldSpan>
                      Barkada general meetings, every Tuesday at 7:40 PM
                    </BoldSpan>{" "}
                    in Shapell Lounge (MCC)!
                  </PageSpan>
                </div>
              </Content>
              <Title>KAAmponents of KAA:</Title>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginLeft: "10vw",
                  marginTop: "5vh",
                  textAlign: "left"
                }}
              >
                <img
                  src={kaamponents}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <Content>
                <div style={{ width: "90%", padding: "5%" }}>
                  <PageSpan color="white">
                    There are 4 main components to the Kuya, Ate, Ading Program:
                  </PageSpan>
                  <PageSpan color="#B5D7E4">1. First Letters</PageSpan>
                  <PageSpan color="#B5D7E4">2. Second Letters</PageSpan>
                  <PageSpan color="#B5D7E4">3. KAA Clue Night</PageSpan>
                  <PageSpan color="#B5D7E4">4. KAA Reveal</PageSpan>
                  <h2
                    style={{
                      textDecoration: "underline",
                      color: "#B5D7E4",
                      paddingTop: 24
                    }}
                  >
                    1. First Letters:
                  </h2>
                  <PageSpan color="white">
                    All Kuyas/Ates & Adings that have been paired up by a
                    magical KAAmmittee, will begin writing and exchanging
                    letters to each other at the Week 5 general meeting on
                    Tuesday at 7:40 PM!
                  </PageSpan>
                  <PageSpan color="white">
                    Adings will write a letter to their future Kuya/Ate and
                    basically introduce themselves! The Kuya/Ate will also write
                    an introduction letter to their future ading(s) and give a
                    little surprise with their letter.
                  </PageSpan>
                  <h2
                    style={{
                      textDecoration: "underline",
                      color: "#B5D7E4",
                      paddingTop: 24
                    }}
                  >
                    2. Second Letters:
                  </h2>
                  <PageSpan color="white">
                    Second letters work the same way as first letters do --
                    except this time, the letter will be a response to your
                    Kuya/Ate or Ading(s).
                  </PageSpan>
                  <h2
                    style={{
                      textDecoration: "underline",
                      color: "#B5D7E4",
                      paddingTop: 24
                    }}
                  >
                    3. KAA Clue Night:
                  </h2>
                  <PageSpan color="white">
                    Adings will be taken around campus to find clues about their
                    future Kuya/Ate by performing different tasks.{" "}
                  </PageSpan>
                  <h2
                    style={{
                      textDecoration: "underline",
                      color: "#B5D7E4",
                      paddingTop: 24
                    }}
                  >
                    4. KAA Reveal:
                  </h2>
                  <PageSpan color="white">
                    This is the final event of the KAA season where families
                    will be created and united through a grand reveal!{" "}
                  </PageSpan>
                  <PageSpan
                    color="white"
                    style={{ textAlign: "center", padding: "24px" }}
                    onClick={() => this.refs.parallax.scrollTo(0)}
                  >
                    Click to go back to top
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

export default Kaa;
