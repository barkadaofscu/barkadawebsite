import React, { Component } from "react";
import { animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import {
  Page,
  PageTitle,
  PageTag,
  PageSpan,
  Container,
  Row,
  Column
} from "../Primitives";
import Card from "./Card";
import fg from "./assets/fg.JPG";
import eotyd from "./assets/eotyd.JPG";
import kaa from "./assets/kaa.JPG";

class Events extends Component {
  render() {
    return (
      <Page>
        <PageTitle>Events</PageTitle>
        <Container>
          <PageSpan>
            Barkada hosts KAA, the largest big/little program on campus, travels
            to Southern California for Friendship games and sends off its
            seniors for the End of the Year Dinner.
          </PageSpan>
        </Container>
        <Container>
          <PageTag>Our biggest events: </PageTag>
        </Container>
        <Card name="KAA" image={kaa} />
        <Card name="Friendship Games" image={fg} />
        <Card name="End of the Year Dinner" image={eotyd} />
        <Container>
          <Link
            style={{ color: "black", textDecoration: "none", fontSize: "20px" }}
            to="/events"
          >
            Click here for more details on our amazing programs/events
          </Link>
        </Container>
      </Page>
    );
  }
}

export default Events;
