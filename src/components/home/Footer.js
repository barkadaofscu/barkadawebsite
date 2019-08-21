import React from "react";
import { Row, Column } from "./Primitives";
import { Icon } from "antd";

const footerStyle = {
  width: "100vw",
  height: "200px",
  backgroundColor: "#1D2A36",
  position: "relative",
  textAlign: "center",
  overflow: "hidden"
};

const iconStyle = {
  color: "white",
  fontSize: "32px"
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <Row>
        <div
          style={{
            width: "80%",
            marginLeft: "10%",
            marginRight: "10%",
            height: "auto",
            display: "inline-block",
            textAlign: "center",
            marginTop: "50px"
          }}
        >
          <div
            style={{
              width: "33%",
              height: "100%",
              display: "inline-block"
            }}
          >
            <a href="https://www.facebook.com/SCUBarkada/">
              <Icon type="facebook" style={iconStyle} />
            </a>
          </div>
          <div
            style={{
              width: "33%",
              height: "100%",
              display: "inline-block",
              textAlign: "center"
            }}
          >
            <a href="https://twitter.com/SCUBarkada">
              <Icon type="twitter" style={iconStyle} />
            </a>
          </div>
          <div
            style={{
              width: "33%",
              height: "100%",
              display: "inline-block",
              textAlign: "center"
            }}
          >
            <a href="https://www.instagram.com/scubarkada/">
              <Icon type="instagram" style={iconStyle} />
            </a>
          </div>
        </div>
      </Row>
      <Row>
        <p style={{ fontSize: "16px", color: "white" }}>Designed by Ian Cho</p>
      </Row>
    </div>
  );
};

export default Footer;
