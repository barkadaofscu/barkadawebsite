import React from "react";
import {
  Page,
  PageTitle,
  PageSpan,
  PageTag,
  Row,
  FixedColumn
} from "../../shared/primitives/Primitives";

const Membership = () => {
  return (
    <Page style={{ paddingTop: "4vh", paddingBottom: "4vh" }}>
      <div
        style={{
          width: "100vw",
          textAlign: "center",
          overflow: "hidden"
        }}
      >
        <PageTitle>Membership</PageTitle>
      </div>
      <Row>
        <FixedColumn width="33%">
          <PageSpan>KAA</PageSpan>
        </FixedColumn>
        <FixedColumn width="33%">
          <PageSpan>Discounted Events</PageSpan>
        </FixedColumn>
        <FixedColumn width="33%">
          <PageSpan>Free Shirt</PageSpan>
        </FixedColumn>
      </Row>
    </Page>
  );
};

export default Membership;
