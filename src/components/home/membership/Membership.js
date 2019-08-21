import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { PageTitle, PageTag, PageSpan, Row, Column } from "../Primitives";

const Membership = () => {
  return (
    <animated.div
      style={{
        zIndex: 4,
        width: "100vw",
        height: "40vh",
        marginTop: "75vh",
        backgroundColor: "white"
      }}
    >
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
    </animated.div>
  );
};

export default Membership;
