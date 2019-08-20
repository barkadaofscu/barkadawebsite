import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import about1 from "./about1.JPG";
import "./about.css";

const About = () => (
  <div
    style={{
      marginTop: "100vh",
      width: "100vw",
      height: "80vh",
      backgroundColor: "white",
      position: "absolute"
    }}
  >
    <div
      style={{
        width: "100%",
        height: "85%",
        marginTop: "7.5%",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "72px",
          marginLeft: "10%",
          marginRight: "10%",
          textAlign: "left"
        }}
      >
        <h1 className="pageTitle">About</h1>
      </div>
      <div className="row" style={{ marginTop: "16px", height: "50%" }}>
        <div
          className="column"
          style={{ width: "45%", height: "80%", marginTop: "24px" }}
        >
          <span className="colSpan" style={{ fontSize: "28px", marginTop: 0 }}>
            Loosely translated, Barkada means: "a group of friends"
          </span>
          <span className="colSpan" style={{ fontSize: "20px" }}>
            Founded by Gem & Butch Yabut and Ronald Martinez, Barkada was
            established in 1983 and is one of the six founding organizations in
            the Multicultural Center.
          </span>
          <span className="colSpan" style={{ fontSize: "20px" }}>
            The mission of Barkada of Santa Clara University is to promote the
            awareness of the Filipino culture and community on the SCU campus
            through education, networking, social justice, and social
            activities/events while upholding its heritage, traditions, and
            relationships.
          </span>
        </div>
        <div
          className="column"
          style={{
            width: "50%",
            height: "100%",
            float: "right",
            marginTop: "24px",
            backgroundImage: `url(${about1})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
      </div>
    </div>
  </div>
);

export default About;
