import React from "react";
import { Icon } from "antd";
import { Row, ColumnOne } from "../Primitives";

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
        <div style={{ width: "80%", height: "auto", marginTop: "50px", marginLeft: "10%" }}>
          <ColumnOne width="25%">
            <a href="https://www.facebook.com/SCUBarkada/">
              <Icon type="facebook" style={iconStyle} />
            </a>
          </ColumnOne>
          <ColumnOne width="25%">
            <a href="https://twitter.com/SCUBarkada">
              <Icon type="twitter" style={iconStyle} />
            </a>
          </ColumnOne>
          <ColumnOne width="25%">
            <a href="https://www.instagram.com/scubarkada/">
              <Icon type="instagram" style={iconStyle} />
            </a>
          </ColumnOne>
          <ColumnOne width="25%">
            <a href="https://www.youtube.com/user/barkadaofscu">
              <Icon type="youtube" style={iconStyle} />
            </a>
          </ColumnOne>
        </div>
      </Row>
      <Row>
        <p style={{ fontSize: "16px", color: "black" }}>Designed by Ian Cho</p>
      </Row>
    </div>
  );
}

export default Footer;
