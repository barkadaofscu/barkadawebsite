import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Page, PageTitle, PageTag, PageSpan, Row, Column } from "../Primitives";

const Membership = () => {
  return (
    <Page>
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
