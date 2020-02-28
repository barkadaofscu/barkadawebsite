import React, { Component } from "react";
import {
  PageTag,
  BoldTag,
  BoldSpan,
  PageSpan,
  Row,
  Container,
  FixedColumn
} from "../../shared/primitives";
import castPhoto1 from "./assets/fullCast1.png";

class About extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          overflow: "hidden",
          textAlign: "left"
        }}
      >
        <Row style={{ marginTop: 32 }}>
          <Container float="left">
            <PageTag>
              The <BoldTag>largest</BoldTag> student-run cultural production at
              Santa Clara University.
            </PageTag>
          </Container>
        </Row>
        <Row style={{ marginBottom: 32 }}>
          <Container float="left">
            <FixedColumn>
              <PageSpan>
                <BoldSpan>30th</BoldSpan> Pilipino Cultural Night
              </PageSpan>
              <PageSpan>
                <BoldSpan>14</BoldSpan> traditional folk dances
              </PageSpan>
              <PageSpan>
                <BoldSpan>3</BoldSpan> modern dances
              </PageSpan>
            </FixedColumn>
            <FixedColumn>
              <PageSpan>
                <BoldSpan>83</BoldSpan> cast members
              </PageSpan>
              <PageSpan>
                <BoldSpan>22</BoldSpan> alumni teachers
              </PageSpan>
              <PageSpan>
                <BoldSpan>360</BoldSpan> days to make this production come to
                life
              </PageSpan>
            </FixedColumn>
          </Container>
        </Row>
        <div style={{ width: "80%", height: "20%", marginLeft: "10%" }}>
          <img
            src={castPhoto1}
            alt="cast"
            style={{ width: "100%", height: "auto", paddingBottom: "40px" }}
          />
        </div>
      </div>
    );
  }
}

export default About;
