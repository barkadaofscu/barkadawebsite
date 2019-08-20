import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import ImageFade from "./ImageFade";
import Card from "./events/Card";
import About from "./about/About";
import Masonry from "./masonry/Masonry";
import about1 from "./assets/about1.JPG";
import fg from "./assets/fg.JPG";
import eotyd from "./assets/eotyd.JPG";
import kaa from "./assets/kaa.JPG";
import "./home.css";

class HomePage extends Component {
  render() {
    return (
      <animated.div
        style={{
          ...this.props.style,
          height: "100%",
          overflowY: "scroll",
          zIndex: 3,
          padding: 0
        }}
      >
        <div style={{ height: "100%" }}>
          <ImageFade />
        </div>
        <div
          style={{
            width: "100vw",
            height: "80vh",
            backgroundColor: "white",
            zIndex: 4,
            position: "absolute"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "85%",
              marginTop: "7.5%"
            }}
          >
            <div
              style={{
                width: "80%",
                height: "72px",
                marginLeft: "10%",
                marginRight: "10%",
                textAlign: "left"
              }}
            >
              <h1 className="pageTitle">About</h1>
            </div>
            <div className="row" style={{ marginTop: "16px", height: "50%" }}>
              <div
                className="column"
                style={{ width: "45%", height: "80%", marginTop: "24px" }}
              >
                <span
                  className="colSpan"
                  style={{ fontSize: "28px", marginTop: 0 }}
                >
                  Loosely translated, Barkada means: "a group of friends"
                </span>
                <span className="colSpan" style={{ fontSize: "20px" }}>
                  Founded by Gem & Butch Yabut and Ronald Martinez, Barkada was
                  established in 1983 and is one of the six founding
                  organizations in the Multicultural Center.
                </span>
                <span className="colSpan" style={{ fontSize: "20px" }}>
                  The mission of Barkada of Santa Clara University is to promote
                  the awareness of the Filipino culture and community on the SCU
                  campus through education, networking, social justice, and
                  social activities/events while upholding its heritage,
                  traditions, and relationships.
                </span>
              </div>
              <div
                className="column"
                style={{
                  width: "50%",
                  height: "100%",
                  float: "right",
                  marginTop: "24px",
                  backgroundImage: `url(${about1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "80vh",
            width: "100vw",
            height: "130vh",
            backgroundColor: "white",
            textAlign: "center",
            overflow: "hidden"
          }}
        >
          <h1 style={{ color: "black", fontSize: 72 }}>Events/Programs</h1>
          <div
            style={{
              width: "80%",
              marginLeft: "10%",
              textAlign: "center",
              fontSize: 28
            }}
          >
            <p>
              Pay the membership fee just once and enjoy numerous benefits.
              Barkada hosts KAA, the largest big/little program on campus,
              travels to Southern California for Friendship games and sends off
              its seniors for the End of the Year Dinner.
            </p>
            <div
              style={{
                width: "100%",
                height: 48
              }}
            >
              <div
                style={{
                  width: "33.33%",
                  height: "100%",
                  float: "left",
                  textAlign: "center"
                }}
              >
                <p
                  style={{
                    position: "relative",
                    margin: 0,
                    top: "15%",
                    fontSize: 24
                  }}
                >
                  KAA
                </p>
              </div>
              <div
                style={{
                  width: "33.33%",
                  height: "100%",
                  float: "left",
                  textAlign: "center"
                }}
              >
                <p
                  style={{
                    position: "relative",
                    margin: 0,
                    top: "15%",
                    fontSize: 24
                  }}
                >
                  Discount to Events
                </p>
              </div>

              <div
                style={{
                  width: "33.33%",
                  height: "100%",
                  float: "left",
                  textAlign: "center"
                }}
              >
                <p
                  style={{
                    position: "relative",
                    margin: 0,
                    top: "15%",
                    fontSize: 24
                  }}
                >
                  Free T-shirt
                </p>
              </div>
            </div>
            <div
              style={{
                width: "100vw",
                height: "55vh",
                float: "left",
                marginTop: 24
              }}
            >
              <Card name="KAA" image={kaa} />
              <Card name="Friendship Games" image={fg} />
              <Card name="End of the Year Dinner" image={eotyd} />
            </div>
          </div>
          <div
            style={{
              width: "100vw",
              height: "10vh",
              marginTop: "70vh",
              fontSize: 20
            }}
          >
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/events"
            >
              Click here for more details on our amazing programs/events
            </Link>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
            textAlign: "center",
            overflow: "hidden"
          }}
        >
          <h1
            style={{
              color: "black",
              fontSize: 72,
              textAlign: "right",
              marginRight: "10%"
            }}
          >
            Outreach
          </h1>
          <div
            style={{
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              textAlign: "right"
            }}
          >
            <div style={{ margin: 0, fontSize: 32 }}>
              Barkada is proud to work with local communities in the bay area
            </div>
            <div
              style={{
                width: "45%",
                height: "80%",
                marginTop: "24px",
                  float: "right",
                  fontSize: 24
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ac pretium nunc. Integer efficitur libero purus, et
                hendrerit ligula imperdiet vitae. Maecenas eu interdum est.
                Quisque a mauris ac dui vestibulum pretium.
              </p>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default HomePage;
