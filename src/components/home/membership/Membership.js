import React from "react";
import { Page, PageTitle, PageSpan } from "../../shared/primitives/Primitives";

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
      <div
        style={{
          width: "80%",
          height: "80%",
          marginLeft: "10%",
          textAlign: "center",
          fontSize: 20
        }}
      >
        <PageSpan>
          Pay the membership fee just once and enjoy numerous benefits. Barkada
          hosts KAA, the largest big/little program on campus, travels to
          Southern California for Friendship games and sends off its seniors for
          the End of the Year Dinner.
        </PageSpan>
      </div>
    </Page>
  );
};

export default Membership;
