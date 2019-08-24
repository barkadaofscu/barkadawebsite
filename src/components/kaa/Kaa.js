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
  Logo,
  Row,
  FixedColumn
} from "../shared/primitives/Primitives";
import ImageFade from "../shared/imagefade/ImageFade";
import kaamponents from "./assets/kaamponents.png";
import photoArr from "./assets/data";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";

class Kaa extends Component {
  render() {
    const styles = {
      fontFamily: "Menlo-Regular, Menlo, monospace",
      fontSize: 14,
      lineHeight: "10px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
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
          <ImageFade data={photoArr} />
          <Parallax ref="parallax" pages={5}>
            <ParallaxLayer offset={0} speed={1}>
              <div
                style={{ marginTop: "2%", float: "left", marginLeft: "24px" }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <p style={{ color: "white", fontSize: "24px", marginTop: 8 }}>
                    Home
                  </p>
                  <Icon
                    type="left"
                    style={{ color: "white", fontSize: "36px" }}
                  />
                </Link>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.3} speed={1}>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginLeft: "10vw",
                  marginRight: "10vw",
                  background: `linear-gradient(to right, #312AA9, #79ACD0)`
                }}
              >
                <img
                  src={logo}
                  style={{ width: "auto", height: "5vh", padding: "2vh" }}
                />
              </div>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginLeft: "10vw",
                  textAlign: "center",
                  background: `rgba(64,64,64,0.9)`
                }}
              >
                <PageTitle color="white" style={{ padding: "5%" }}>
                  KAA 2018
                </PageTitle>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={3}>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginLeft: "10vw",
                  marginRight: "10vw",
                  background: `linear-gradient(to right, #312AA9, #79ACD0)`
                }}
              >
                <h1 style={{ color: "white", padding: 24 }}>KAA What?</h1>
              </div>
              <div
                style={{
                  width: "80vw",
                  height: "80vh",
                  marginTop: "5vh",
                  marginLeft: "10vw",
                  textAlign: "center",
                  background: `rgba(64,64,64,0.9)`
                }}
              >
                <iframe
                  width="100%"
                  height="90%"
                  src="https://www.youtube.com/embed/sVO4-jciJnI"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <PageSpan color="white">
                  <BoldSpan>KAA 2018</BoldSpan>
                </PageSpan>
              </div>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginTop: "10vh",
                  marginLeft: "10vw",
                  textAlign: "left",
                  background: `rgba(64,64,64,0.9)`
                }}
              >
                <div style={{ width: "90%", height: "90%", padding: "5%" }}>
                  <PageSpan color="white">
                    Welcome to the Kuya Ate Ading Program!
                  </PageSpan>
                  <PageSpan color="white">
                    We're super excited for you to join the biggest big/little
                    mentorship program at SCU. For years, the KAA program has
                    brought lifetime friendships, endless love, and
                    unforgettable memories.
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
              </div>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginLeft: "10vw",
                  marginRight: "10vw",
                  marginTop: "20vh",
                  background: `linear-gradient(to right, #312AA9, #79ACD0)`
                }}
              >
                <h1 style={{ color: "white", padding: 24 }}>How to KAA:</h1>
              </div>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginLeft: "10vw",
                  textAlign: "left",
                  background: `rgba(64,64,64,0.9)`
                }}
              >
                <div style={{ width: "90%", height: "90%", padding: "5%" }}>
                  <PageSpan color="white">
                    Come to
                    <BoldSpan>
                      Barkada general meetings, every Tuesday at 7:40 PM
                    </BoldSpan>
                    in Shapell Lounge (MCC)!
                  </PageSpan>
                  <PageSpan color="white">
                    <BoldSpan>How it works:</BoldSpan> After you turn in a KAA
                    application form and your $20 membership dues, a fabulous
                    KAAmmittee will match you with a big/little in Barkada based
                    on your applications and potential compatibility.
                  </PageSpan>
                </div>
              </div>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginLeft: "10vw",
                  marginRight: "10vw",
                  marginTop: "20vh",
                  background: `linear-gradient(to right, #312AA9, #79ACD0)`
                }}
              >
                <h1 style={{ color: "white", padding: 24 }}>
                  KAAmponents of KAA:
                </h1>
              </div>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginLeft: "10vw",
                  textAlign: "left"
                }}
              >
                <img
                  src={kaamponents}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                style={{
                  width: "80vw",
                  height: "auto",
                  marginTop: "5vh",
                  marginLeft: "10vw",
                  textAlign: "left",
                  background: `rgba(64,64,64,0.9)`
                }}
              >
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
                  <PageSpan color="white">
                    *Please let us know if you are unable to come to the meeting
                    and coordinate with a Barkada board member to make sure your
                    letter (and surprise, if you are a Kuya/Ate) is submitted in
                    time. We don't want anyone empty-handed!
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
                  <PageSpan color="white">
                    Again, please let any Barkada board member know if you are
                    unable to come to the Week 6 general meeting on Tuesday at
                    7:40 PM for second letters!
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
                    future Kuya/Ate by performing different tasks. Kuyas/Ates
                    are welcome to watch during Clue Night, which is on Friday,
                    10/26.
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
                    will be created and united through a grand reveal! We will
                    meet at the Shapell Lounge (MCC) across the Bookstore at
                    5:00 PM on Friday, 11/2.
                  </PageSpan>
                <PageSpan color="white" style={{padding: "24px"}} onClick={() => this.refs.parallax.scrollTo(0)}>
                  Click to go back to top
                </PageSpan>
                </div>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </animated.div>
    );
  }
}

export default Kaa;
