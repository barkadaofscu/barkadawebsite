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
    <Page >
      <Container>
        <PageTitle float="right">Outreach</PageTitle>
      </Container>
      <Container float="right">
        <PageTag>
          Barkada is proud to work with local communities in the bay area
        </PageTag>
        <PageSpan>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          accumsan sed arcu ut vehicula. Integer laoreet metus sit amet augue
          placerat, quis imperdiet risus mollis. Fusce et sollicitudin metus, ut
          semper eros. In sed purus lobortis, iaculis tellus pharetra, malesuada
          sapien. Nam pharetra tellus suscipit scelerisque dapibus.
        </PageSpan>
      </Container>
    </Page>
  );
};

export default Outreach;
