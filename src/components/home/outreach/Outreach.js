import React from "react";
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

const Outreach = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        background: `linear-gradient(to right, #312AA9, #79ACD0)`
      }}
    >
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Column>
          <img
            src={blanket}
            style={{
              width: "100%",
              height: "100%",
              verticalAlign: "bottom"
            }}
          />
        </Column>
        <Column>
          <Container float="right" style={{ marginTop: "5%" }}>
            <PageTitle color="white" float="right">
              Outreach
            </PageTitle>
            <PageTag color="white">
              Barkada is proud to work with local communities in the bay area.
            </PageTag>
            <PageSpan color="white">
              Organizations we've worked with in the past:
            </PageSpan>
            <div
              style={{
                width: "100%",
                height: "45%"
              }}
            >
              <FixedColumn width="33%">
                <div
                  style={{
                    width: "80%",
                    height: "100%",
                    marginLeft: "10%",
                    marginRight: "10%"
                  }}
                >
                  <img src={gk} style={{ width: "100%", height: "auto" }} />
                </div>
              </FixedColumn>
              <FixedColumn width="33%">
                <div
                  style={{
                    width: "80%",
                    height: "100%",
                    marginLeft: "10%",
                    marginRight: "10%"
                  }}
                >
                  <img src={lead} style={{ width: "80%", height: "auto" }} />
                </div>
              </FixedColumn>
              <FixedColumn width="33%">
                <div
                  style={{
                    width: "80%",
                    height: "100%",
                    marginLeft: "10%",
                    marginRight: "10%"
                  }}
                >
                  <img src={linus} style={{ width: "100%", height: "auto" }} />
                </div>
              </FixedColumn>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                position: "relative",
                marginTop: "24px"
              }}
            >
              <p
                style={{ color: "white", fontSize: 18, padding: 0, margin: 0 }}
              >
                scubarkada@gmail.com
              </p>
            </div>
          </Container>
        </Column>
      </div>
    </div>
  );
};

export default Outreach;
