import React, { Component } from "react";
import {
  PageTitle,
  BoldTag,
  PageSpan,
  Container,
  Row,
  FixedColumn
} from "../../shared/primitives";
import director1 from "./assets/Colman Lin.jpeg";
import director2 from "./assets/Dana Militante.jpeg";
import director3 from "./assets/Janine Bautista.jpeg";
import "./styles.css";

class Directors extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          textAlign: "center",
          overflow: "hidden"
        }}
      >
        <Container style={{ padding: "48px 0px", textAlign: "left" }}>
          <PageSpan>
            Hello! Our names are Dana Militante, Colman Lin and Janine Bautista
            and we are absolutely pumped to be your PCN Directors of 2020. Each
            of us has been a part of Pilipino Culture Night (PCN) for the past 3
            years now and it’s meant something different for all 3 of us. With
            our different backgrounds and experiences in life and with this
            production, we want to make PCN a memorable experience for others
            like it has been for us.
          </PageSpan>
          {"\n"}
          <PageSpan>
            We have three main objectives for our upcoming show:
          </PageSpan>
          {"\n"}
          <PageSpan>
            <ol>
              <li>
                To bridge together the traditions of the past with the customs
                and culture of the modern day Filipinx.
              </li>
              <li>
                To bridge together skit, dance and a new element of singing
              </li>
              <li>
                To bridge together the audience and the performers on stage
              </li>
            </ol>
          </PageSpan>
          <PageSpan>
            By building these bridges, we hope to share the story and culture of
            the Filipino people and to celebrate the 30th Anniversary of PCN at
            Santa Clara University. We can’t tell you how excited we are to show
            you what we have in store.
          </PageSpan>
          {"\n"}
          <PageSpan>With peace, love, unity, and respect,</PageSpan>
          <PageSpan>Janine Bautista, Colman Lin, and Dana Militante</PageSpan>
          <PageSpan>Co-Directors, Barkada PCN 2020</PageSpan>
        </Container>
        <Row style={{paddingBottom: "48px"}}>
          <FixedColumn width="33%">
            <img
              src={director1}
              alt="Director 1"
              style={{
                width: "60%",
                height: "auto",
                borderRadius: "50%"
              }}
            />
            <PageSpan>Colman Lin</PageSpan>
          </FixedColumn>
          <FixedColumn width="33%">
            <img
              src={director2}
              alt="Director 2"
              style={{
                width: "60%",
                height: "auto",
                borderRadius: "50%"
              }}
            />
            <PageSpan>Dana Militante</PageSpan>
          </FixedColumn>
          <FixedColumn width="33%">
            <img
              src={director3}
              alt="Director 2"
              style={{
                width: "60%",
                height: "auto",
                borderRadius: "50%"
              }}
            />
            <PageSpan>Janine Bautista</PageSpan>
          </FixedColumn>
        </Row>
      </div>
    );
  }
}

export default Directors;
