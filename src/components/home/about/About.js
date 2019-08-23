import React from "react";
import {
  PageTitle,
  PageTag,
  PageSpan,
  Container,
  Column
} from "../../shared/primitives/Primitives";
import about1 from "./about1.JPG";

const About = () => (
  <div
    style={{
      width: "100vw",
      height: "auto",
      position: "relative",
      background: `linear-gradient(to right, #312AA9, #79ACD0)`,
      textAlign: "left"
    }}
  >
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Column>
        <Container float="left" style={{ marginTop: "5%" }}>
          <PageTitle color="white" float="left">
            About
          </PageTitle>
          <PageTag color="white">
            Loosely translated, Barkada means: "a group of friends"
          </PageTag>
          <PageSpan color="white">
            Founded by Gem & Butch Yabut and Ronald Martinez, Barkada was
            established in 1983 and is one of the six founding organizations in
            the Multicultural Center.
          </PageSpan>
          <PageSpan color="white">
            The mission of Barkada of Santa Clara University is to promote the
            awareness of the Filipino culture and community on the SCU campus
            through education, networking, social justice, and social
            activities/events while upholding its heritage, traditions, and
            relationships.
          </PageSpan>
        </Container>
      </Column>
      <Column>
        <img
          src={about1}
          style={{
            width: "100%",
            height: "100%",
            verticalAlign: "bottom"
          }}
        />
      </Column>
    </div>
  </div>
);

export default About;
