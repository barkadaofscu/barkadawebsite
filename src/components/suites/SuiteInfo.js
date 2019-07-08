import React, { Component } from "react";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner
} from "react-scroll-parallax";
import mountain1 from "./assets/mountain.jpg";
import "./styles.css";

const SuiteInfo = props => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        textAlign: "center"
      }}
    >
      {/**
						
						                        <img src={mountain} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={mariaclara} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        <img src={modern} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={muslim} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        */}
      <ParallaxBanner
        style={{
          height: "100vh"
        }}
        layers={[
          {
            children: (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${props.background})`,
                  backgroundSize: "cover"
                }}
              ></div>
            ),
            amount: 0.2,
            expanded: false
          },
          {
            children: (
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontSize: "60px",
                    float: "right",
                    marginRight: "5%",
                    width: "auto",
                    height: "25%",
                    marginTop: "20%",
                    color: "white"
                  }}
                >
                  {props.title}
                </p>
              </div>
            ),
            amount: 0.5,
            expanded: false
          },
          {
            children: (
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontSize: "20px",
                    float: "right",
                    marginRight: "5%",
                    width: "25%",
                    height: "25%",
                    marginTop: "25%",
                    color: "white"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  scelerisque malesuada dapibus. Nullam condimentum lectus sit
                  amet est commodo pulvinar.
                </p>
              </div>
            ),
            amount: 0.5,
            expanded: false
          }
        ]}
      ></ParallaxBanner>
    </div>
  );
};

export default SuiteInfo;
