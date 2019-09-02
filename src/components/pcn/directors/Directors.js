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
        <Container>
          <PageSpan>Letter from directors to be added</PageSpan>
        </Container>
        <Row>
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
