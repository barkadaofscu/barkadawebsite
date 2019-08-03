import React from "react";
import { Icon } from "antd";

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
  marginLeft: "42px",
  marginRight: "42px"
};

function Footer() {
  return (
    <div style={footerStyle}>
      <div style={{ width: "50%", height: "100%", float: "left" }}>
        <p style={{ fontSize: "16px", marginTop: "60px" }}>
          Designed by Ian Cho
        </p>
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "inlineBlock",
          float: "left"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50%",
            marginTop: "60px",
            textAlign: "center"
          }}
        >
          <a
            style={{ paddingTop: "60px", fontSize: "42px" }}
            href="https://www.facebook.com/SCUBarkada/"
          >
            <Icon type="facebook" style={iconStyle} />
          </a>
          <a href="https://twitter.com/SCUBarkada">
            <Icon type="twitter" style={iconStyle} />
          </a>
          <a href="https://www.instagram.com/scubarkada/">
            <Icon type="instagram" style={iconStyle} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
