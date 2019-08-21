import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import {
  Page,
  PageTitle,
  PageTag,
  PageSpan,
  Container,
  Row,
  Column
} from "../Primitives";

const Outreach = () => {
  return (
    <Page float="right">
      <Container float="right">
        <PageTitle >Outreach</PageTitle>
      </Container>
      <Container>
        <PageTag>
          Barkada is proud to work with local communities in the bay area
        </PageTag>
        <PageSpan>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac pretium nunc. Integer efficitur libero purus, et hendrerit ligula
          imperdiet vitae. Maecenas eu interdum est. Quisque a mauris ac dui
          vestibulum pretium.
        </PageSpan>
      </Container>
    </Page>
  );
};

export default Outreach;
