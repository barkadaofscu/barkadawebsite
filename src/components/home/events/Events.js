import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Page,
  PageTitle,
  PageTag,
  PageSpan,
  Container
} from "../../shared/primitives/Primitives";
import Card from "../../shared/card";
import fg from "./assets/fg.JPG";
import eotyd from "./assets/eotyd.JPG";
import kaa from "./assets/kaa.JPG";

const events = [
  {
    key: 1,
    name: "KAA",
    image: kaa,
    description:
      "KAA, Kuya Ate Ading, is the largest big/little mentorship program on campus. For years, the KAA program has bgrough lifetime friendships, endless love, and unforgetable memories."
  },
  {
    key: 2,
    image: fg,
    name: "Friendship Games",
    description:
      "Friendship games features over 40 Pilipino American Student Organizations from college Campuses representing CA, NV, AZ that participate in a day of friendly but competitive picnic games, performances, and S.P.U.F - Spirit, Pride, Unity, and Friendship."
  },
  {
    key: 3,
    image: eotyd,
    name: "End of the Year Dinner",
    description:
      "End of the Year Dinner is a reflection of all the good times shared throughout the year, as well as a farewell to the graduating seniors."
  }
];
class Events extends Component {
  render() {
    return (
      <Page style={{ paddingTop: "4vh", paddingBottom: "4vh" }}>
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
        <Card
          name="KAA"
          image={events[0].image}
          description={events[0].description}
        />
        <Card
          name="Friendship Games"
          image={events[1].image}
          description={events[1].description}
        />
        <Card
          name="End of the Year Dinner"
          image={events[2].image}
          description={events[2].description}
        />
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
