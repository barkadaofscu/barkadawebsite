import React, { Component } from "react";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner
} from "react-scroll-parallax";
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
              <div
                style={{ width: "100%", height: "100%", textAlign: "right" }}
              >
                <p className="suiteInfoTitle">{props.title}</p>
              </div>
            ),
            amount: 0.5,
            expanded: false
          },
          {
            children: (
              <div
                style={{ width: "100%", height: "100%", textAlign: "right" }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    float: "right",
                    marginRight: "5%",
                    width: "30%",
                    height: "30%",
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
