import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { PageTitle, PageTag, PageSpan, Row, Column } from "../Primitives";

const Outreach = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        textAlign: "right",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "68px",
          float: "right",
          marginRight: "10%",
          marginBottom: "24px"
        }}
      >
        <PageTitle>Outreach</PageTitle>
      </div>
      <div
        style={{
          width: "80%",
          marginLeft: "10%",
          marginRight: "10%",
          textAlign: "right"
        }}
      >
        <PageTag >
          Barkada is proud to work with local communities in the bay area
        </PageTag>
        <div
          style={{
            width: "45%",
            height: "80%",
            marginTop: "24px",
            float: "right",
            fontSize: 18
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ac pretium nunc. Integer efficitur libero purus, et
            hendrerit ligula imperdiet vitae. Maecenas eu interdum est. Quisque
            a mauris ac dui vestibulum pretium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Outreach;
