import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated } from "react-spring/renderprops";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import {
  PageSpan,
  Content,
  Title,
  PageTitle,
  Row,
  FixedColumn
} from "../shared/primitives/Primitives";
import logo from "../shared/images/logo.png";
import ImageFade from "../shared/imagefade/ImageFade";
import data from "./assets/data";

class Barrio extends Component {
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
                  Barrio Fiesta
                </PageTitle>
              </Content>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={3}>
              <Title>What is Barrio Fiesta?</Title>
              <Content>
                <div float="center" style={{ padding: "5%" }}>
                  <PageSpan color="white">
                    Barrio Fiesta means "neighborhood celebration," and is an
                    annual Barkada dinner in which we celebrate the Filipino
                    culture by coming together as a campus community to eat
                    traditional Filipino food and watch peers perform acts
                    ranging from singing, dancing, spoken word, yo-yo-ing and
                    more!
                  </PageSpan>
                </div>
              </Content>
              <Content>
                <div style={{ padding: "5%" }}>
                  <PageSpan color="white">
                    Each year, we choose a charity to donate the proceeds of
                    this event to. Last year, 100% of the money we raise from
                    Barrio Fiesta went to Gawad Kalinga.
                  </PageSpan>
                  <PageSpan color="white">
                    "Gawad Kalinga,” translated in English means to “give care”,
                    is a Philippine-based movement that aims to end poverty by
                    first restoring the dignity of the poor. It employs an
                    integrated and holistic approach to empowerment with
                    values-formation and leadership development at its core.
                    Established in 2003, The Foundation currently works with
                    over 2,000 communities and has been recognized as the 2006
                    Ramon Magsaysay Awardee & 2012 Skoll Awardee for Social
                    Entrepreneurship.
                  </PageSpan>
                  <PageSpan color="white">
                    We are proud to support Gawad Kalinga through Barrio Fiesta.
                    Also, be sure to check out their website for more
                    information on their commitment to end poverty:{" "}
                    <a
                      style={{ color: "white" }}
                      href="http://www.gk1world.com/home"
                    >
                      http://www.gk1world.com/home{" "}
                    </a>
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

export default Barrio;
