import React, { Component } from "react";
import {
  PageTitle,
  PageTag,
  BoldTag,
  PageSpan,
  Row,
  BoldHeader,
  FixedColumn
} from "../../shared/primitives";
import castPhoto1 from "./assets/fullCast1.png";

class About extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "white",
          overflow: "hidden",
          textAlign: "center"
        }}
      >
        <Row style={{marginTop: 32}}>
          <PageTitle>About</PageTitle>
          <PageTag >
            The <BoldTag>largest</BoldTag> student-run cultural production at
            Santa Clara University.
          </PageTag>
        </Row>
        <Row style={{marginBottom: 32}}>
          <FixedColumn >
            <PageSpan>
              <BoldHeader>29th</BoldHeader> Pilipino Cultural Night
            </PageSpan>
            <PageSpan>
              <BoldHeader>15</BoldHeader> traditional folk dances
            </PageSpan>
            <PageSpan>
              <BoldHeader>3</BoldHeader> modern dances
            </PageSpan>
          </FixedColumn>
          <FixedColumn >
            <PageSpan>
              <BoldHeader>85</BoldHeader> cast members
            </PageSpan>
            <PageSpan>
              <BoldHeader>19</BoldHeader> alumni teachers
            </PageSpan>
            <PageSpan>
              <BoldHeader>353</BoldHeader> days to make this production come to life
            </PageSpan>
          </FixedColumn>
        </Row>
        <div style={{ width: "75%", height: "20%", marginLeft: "15%" }}>
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
