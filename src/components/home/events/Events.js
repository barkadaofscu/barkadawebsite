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
import barrio from "./assets/barrio1.JPG";
import fg from "./assets/fg.JPG";
import eotyd from "./assets/eotyd.JPG";
import kaa from "./assets/kaa.JPG";

const events = [
  {
    key: 1,
    name: "KAA",
    image: kaa,
    link: "/kaa",
    description:
      "KAA, Kuya Ate Ading, is the largest big/little mentorship program on campus. For years, the KAA program has brought lifetime friendships, endless love, and unforgetable memories."
  },
  {
    key: 2,
    image: fg,
    name: "Friendship Games",
    link: "/fg",
    description:
      "Friendship games features over 40 Pilipino American Student Organizations from college Campuses representing CA, NV, AZ that participate in a day of friendly but competitive picnic games, performances, and S.P.U.F - Spirit, Pride, Unity, and Friendship."
  },
  {
    key: 3,
    name: "Barrio Fiesta",
    image: barrio,
    link: "/barrio",
    description:
      "In October, people flood into Bacolod, known as the “City of Smiles”, to celebrate one of the most famous festivals of the Philippines – MassKara. At Barrio Fiesta, we will honor this tradition by holding our very own MassKara festival! Come join us and unmask the happiness!"
  },
  {
    key: 4,
    name: "End of the Year Dinner",
    image: eotyd,
    link: "/eotyd",
    description:
      "End of the Year Dinner is a reflection of all the good times shared throughout the year, as well as a farewell to the graduating seniors."
  }
];
class Events extends Component {
  render() {
    return (
      <Page
        style={{
          background: `linear-gradient(to right, #312AA9, #79ACD0)`,
          paddingTop: "4vh",
          paddingBottom: "4vh"
        }}
      >
        <PageTitle color="white">Events</PageTitle>
        <Container>
          <PageSpan color="white">
            Barkada hosts KAA, the largest big/little program on campus, travels
            to Southern California for Friendship games, hosts its own MassKara
            festival with Barrio fiesta, sends off its seniors for the End of
            the Year Dinner, and many more! Barkada also produces the largest
            student run culture show on campus{" "}
            <Link to="/pcn" style={{ color:"white" }}>
              (Click here for details)
            </Link>{" "}
            which is open to everyone, including nonmembers! There's an event
            for everyone to enjoy.
          </PageSpan>
        </Container>
        <Container>
          <PageTag color="white">Our biggest events: </PageTag>
        </Container>
        <Card
          name="KAA"
          image={events[0].image}
          link="/kaa"
          description={events[0].description}
        />
        <Card
          name="Friendship Games"
          image={events[1].image}
          link="/fg"
          description={events[1].description}
        />
        <Card
          name="Barrio Fiesta"
          image={events[2].image}
          link="/barrio"
          description={events[2].description}
        />
        <Card
          name="End of the Year Dinner"
          image={events[3].image}
          link="/eotyd"
          description={events[3].description}
        />
        <Container>
          <PageSpan color="white">Click on card name for more information</PageSpan>
        </Container>
      </Page>
    );
  }
}

export default Events;
