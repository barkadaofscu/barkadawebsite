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
          textAlign: "left",
          overflow: "hidden"
        }}
      >
        <Row style={{ marginTop: "24px" }}>
          <PageTitle color="white">Membership</PageTitle>
        </Row>
      </div>
      <Row>
        <FixedColumn>
          <PageSpan color="white" float="left">
            One time membership fee for a "group of friends." General meetings
            at the Shapell Lounge on Tuesdays at 7:40pm.{" "}
          </PageSpan>
        </FixedColumn>
        <FixedColumn>
          <PageSpan color="white" float="left">
            <ul>
              <li>Enterance to KAA</li>
              <li>Discount to events</li>
              <li>Free shirt</li>
            </ul>
          </PageSpan>
        </FixedColumn>
      </Row>
    </Page>
  );
};

export default Membership;
