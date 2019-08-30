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
    <Page style={{ background: `linear-gradient(to right, #312AA9, #79ACD0)` }}>
      <div
        style={{
          width: "100vw",
          overflow: "hidden"
        }}
      >
        <Row style={{ marginTop: "24px" }}>
          <PageTitle color="white">Membership</PageTitle>
        </Row>
      </div>
      <Row>
        <PageSpan color="white">
          One time membership fee for a "group of friends." General meetings at
          the Shapell Lounge on Tuesdays at 7:40pm.{" "}
        </PageSpan>
        <div
          style={{
            width: "250px",
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <PageSpan color="white">
            <ul style={{ textAlign: "left", lineHeight: "200%" }}>
              <li>Enterance to KAA</li>
              <li>Discount to events</li>
              <li>Free shirt</li>
            </ul>
          </PageSpan>
        </div>
      </Row>
    </Page>
  );
};

export default Membership;
