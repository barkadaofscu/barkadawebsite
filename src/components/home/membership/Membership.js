import React from "react";
import { Link } from "react-router-dom";
import {
  Page,
  PageTitle,
  PageSpan,
  PageTag,
  Row,
  Container,
  Column
} from "../../shared/primitives/Primitives";
import kaa from "./kaa.JPG";
import kaa2 from "./kaa2.JPG";
import kaaBanner from "./kaa.png";

const Membership = () => {
  return (
    <Page
      style={{
        paddingTop: "48px",
        paddingBottom: "48px",
        background: "#FFFFFF"
      }}
    >
      <PageTitle>Membership</PageTitle>
      <Container>
        <PageSpan style={{ padding: 0, marginBottom: 0 }}>
          Barkada hosts the Kuya Ate Ading program, a mentorship program that
          has brought lifetime friendships, endless love, and unforgettable
          memories.{" "}
          <Link to="/kaa" style={{ color: "black" }}>
            (Click here more details on KAA)
          </Link>{" "}
          A one-year membership with comes with admission to this amazing
          program as well as discounts to our events and an exclusive shirt.
        </PageSpan>
      </Container>
      <img
        src={kaaBanner}
        style={{
          width: "80%",
          height: "auto",
          marginLeft: "10%",
          marginRight: "10%",
          paddingTop: "48px",
          verticalAlign: "bottom"
        }}
      />
      <Container style={{ width: "100%", marginLeft: "0%", marginRight: "0%" }}>
        <Row style={{ width: "80%", marginLeft: "10%", marginRight: "10%" }}>
          <Column width="50%">
            <img
              src={kaa}
              style={{
                width: "100%",
                height: "auto",
                paddingBottom: "48px",
                verticalAlign: "bottom"
              }}
            />
          </Column>
          <Column width="50%">
            <img
              src={kaa2}
              style={{
                width: "100%",
                height: "auto",
                paddingBottom: "48px",
                verticalAlign: "bottom"
              }}
            />
          </Column>
        </Row>
      </Container>
    </Page>
  );
};

export default Membership;
