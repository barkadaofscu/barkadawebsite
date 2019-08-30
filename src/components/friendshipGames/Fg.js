import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import {
  PageSpan,
  BoldSpan,
  Content,
  PageTitle,
  Title,
  Container,
  Row,
  FixedColumn
} from "../shared/primitives/Primitives";
import logo from "../shared/images/logo.png";
import ImageFade from "../shared/imagefade/ImageFade";
import styled from "styled-components";
import data from "./assets/data";

class Fg extends Component {
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
                  Friendship Games 2018
                </PageTitle>
              </Content>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={3}>
              <Title>What is Friendship Games?</Title>
              <Content style={{ height: "80vh" }}>
                <iframe
                  width="100%"
                  height="90%"
                  src="https://www.youtube.com/embed/Ux1mblDoqbY"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Container float="center">
                  <PageSpan color="white">
                    <BoldSpan>Recap 2018</BoldSpan>
                  </PageSpan>
                </Container>
              </Content>
              <Content>
                <div float="center" style={{ padding: "5%" }}>
                  <PageSpan color="white">
                    <BoldSpan>From the organizers:</BoldSpan> "Friendship Games
                    began in 1985 and features over 40 Pilipino American Student
                    organizations from college campuses representing California,
                    Nevada, and Arizona that participate in a day of friendly
                    but competitive picnic games, performances and to celebrate
                    “S.P.U.F” – Spirit, Pride, Unity, and Friendship. Schools
                    compete for 1st, 2nd, and 3rd place trophies."
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="http://friendshipgames.net"
                    >
                      [Link]
                    </a>
                  </PageSpan>
                  <PageSpan color="white">
                      <BoldSpan> 10 Reasons to go to Friendship Games:</BoldSpan>
                  </PageSpan>
                  <PageSpan color="white">
                    1) If you feel like you don't know enough people to
                    go, that means you should go. You are guaranteed to create
                    new friendships. I met my closest friends at FG and you will
                    probably too! Life begins at the end of your comfort zone.
                  </PageSpan>
                  <PageSpan color="white">
                    2) Your kuya and/or ate may be going...you can weed them out
                    easier in a smaller group (and have fun while doing it too)
                  </PageSpan>
                  <PageSpan color="white">
                    3) We're going to SoCal. And you know what that means? GOOD
                    FOOD. You and your car can squeeze in mini foodie trip. how
                    fun!
                  </PageSpan>
                  <PageSpan color="white">
                    4) You worked hard for those midterms, so it's time you get
                    a break and have a getaway. You definitely deserve it.
                  </PageSpan>
                  <PageSpan color="white">
                    5) Oh wait..you're not done with midterms? 
                    No.Problem. Study with buddies during the car ride. Study at
                    the house we're staying in. And when you are not
                    participating in field games, there's plenty of time to
                    study at the Friendship Games! (if you still find it
                    difficult to study, I'll make it a point to help you out!)
                  </PageSpan>
                  <PageSpan color="white">
                    6) If you're a Disney lover, Downtown Disney is waiting for
                    you....
                  </PageSpan>
                  <PageSpan color="white">
                    7) Make new friends from other Filipino clubs of other
                    universities! 
                  </PageSpan>
                  <PageSpan color="white">
                    8) Get turnt at the club after Friendship Games.
                  </PageSpan>
                  <PageSpan color="white">
                    9) Create amazing memories, post all the love on ur
                    SC/IG/FB/etc. and bond with your club in an organic way
                  </PageSpan>
                  <PageSpan color="white">
                    10) Show your love for Barkada and bring extreme team
                    spirit! Other schools got nothin on us. Let's go!!!!
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

export default Fg;
