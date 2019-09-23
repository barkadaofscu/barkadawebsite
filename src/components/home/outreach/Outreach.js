import React from "react";
import styled from "styled-components";
import {
  Page,
  PageTitle,
  PageTag,
  Row,
  Column,
  FixedColumn,
  PageSpan,
  Container
} from "../../shared/primitives/Primitives";
import blanket from "./blankets.JPG";
import gk from "./gk.png";
import lead from "./lead.jpg";
import linus from "./linus.jpg";
import { device } from "../../device";

const ColumnImage = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  margin-bottom: 24px;
  padding: 0;
  text-align: center;
  @media ${device.tablet} {
    width: 150px;
    height: auto;
  tablet}
  @media ${device.mobileL} {
    width: 70%;
    height: auto;
    
`;

const Outreach = () => {
  return (
    <Page
      style={{
        paddingTop: "48px",
        paddingBottom: "48px",
        background: "white"
      }}
    >
      <Container float="right" style={{ marginTop: "48px" }}>
        <PageTitle float="right">Outreach</PageTitle>
        <PageTag float="right">
          Barkada is proud to work with local communities in the bay area.
        </PageTag>
        <PageSpan>Contact us at scubarkada@gmail.com</PageSpan>
      </Container>
      <img
        src={blanket}
        style={{
          width: "80%",
          height: "auto",
          marginLeft: "10%",
          marginRight: "10%",
          verticalAlign: "bottom"
        }}
      />
      <Container
        style={{
          width: "100%",
          marginLeft: "0%",
          marginRight: "0%",
          background: "white"
        }}
      >
        <Row style={{ width: "100%", marginLeft: "0%", marginRight: "0%" }}>
          <FixedColumn width="33%">
            <ColumnImage>
              <img
                src={gk}
                style={{ width: "100%", height: "auto", marginTop: "25px" }}
              />
            </ColumnImage>
          </FixedColumn>
          <FixedColumn width="33%">
            <ColumnImage>
              <img src={lead} style={{ width: "100%", height: "auto" }} />
            </ColumnImage>
          </FixedColumn>
          <FixedColumn width="33%">
            <ColumnImage>
              <img
                src={linus}
                style={{ width: "100%", height: "auto", marginTop: "20px" }}
              />
            </ColumnImage>
          </FixedColumn>
        </Row>
      </Container>
    </Page>
  );
};

export default Outreach;
