import React, { Component } from "react";
import { animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { PageTitle, PageTag, PageSpan, Row, Column } from "../Primitives";
import Card from "./Card";
import fg from "./assets/fg.JPG";
import eotyd from "./assets/eotyd.JPG";
import kaa from "./assets/kaa.JPG";

class Events extends Component {
  render() {
    return (
      <animated.div
        style={{
          ...this.props.style,
          zIndex: 3,
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "white"
        }}
      >
        <PageTitle>Events/Programs</PageTitle>
        <div
          style={{
            width: "70%",
            marginTop: "24px",
            marginLeft: "15%",
            textAlign: "center",
            fontSize: 20
          }}
        >
          <PageSpan>
            Barkada hosts KAA, the largest big/little program on campus, travels
            to Southern California for Friendship games and sends off its
            seniors for the End of the Year Dinner.
          </PageSpan>
        </div>
        <div
          style={{
            width: "90vw",
            height: "70vh",
            marginLeft: "5vw",
            marginTop: 72
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              marginTop: "48px",
              marginBottom: "32px"
            }}
          >
            <PageTag>Our biggest events: </PageTag>
          </div>
          <Card name="KAA" image={kaa} />
          <Card name="Friendship Games" image={fg} />
          <Card name="End of the Year Dinner" image={eotyd} />
        </div>
        <div
          style={{
            width: "100vw",
            height: "10vh",
            marginTop: "32px",
            fontSize: 20
          }}
        >
          <Link style={{ color: "black", textDecoration: "none" }} to="/events">
            Click here for more details on our amazing programs/events
          </Link>
        </div>
      </animated.div>
    );
  }
}

export default Events;
