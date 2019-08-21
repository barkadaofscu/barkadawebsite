import React from "react";
import { Icon } from "antd";
import { Row } from "../Primitives";

const footerStyle = {
  width: "100%",
  height: "240px",
  backgroundColor: "white",
  bottom: "0",
  position: "absolute",
  display: "inlineBlock",
  textAlign: "center",
  overflow: "hidden"
};

const iconStyle = {
  color: "black",
  fontSize: "42px",
};

function Footer() {
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
        <p style={{ fontSize: "16px", color: "black" }}>Designed by Ian Cho</p>
      </Row>
    </div>
  );
}

export default Footer;
