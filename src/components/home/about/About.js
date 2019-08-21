import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Page, PageTitle, PageTag, PageSpan, Row, Column } from "../Primitives";
import styled from "styled-components";
import about1 from "./about1.JPG";

const About = () => (
  <Page>
    <div
      style={{
        width: "80%",
        height: "68px",
        marginTop: "24px",
        marginBottom: "24px",
        marginLeft: "10%"
      }}
    >
      <PageTitle float="left">About</PageTitle>
    </div>
    <div
      style={{
        width: "100%",
        height: "85%"
      }}
    >
      <Row>
        <Column>
          <PageTag>
            Loosely translated, Barkada means: "a group of friends"
          </PageTag>
          <PageSpan>
            Founded by Gem & Butch Yabut and Ronald Martinez, Barkada was
            established in 1983 and is one of the six founding organizations in
            the Multicultural Center.
          </PageSpan>
          <PageSpan>
            The mission of Barkada of Santa Clara University is to promote the
            awareness of the Filipino culture and community on the SCU campus
            through education, networking, social justice, and social
            activities/events while upholding its heritage, traditions, and
            relationships.
          </PageSpan>
        </Column>
        <Column style={{ overflow: "hidden" }}>
          <img
            src={about1}
            style={{ width: "90%", height: "auto", marginLeft: "5%" }}
          />
        </Column>
      </Row>
    </div>
  </Page>
);

export default About;
