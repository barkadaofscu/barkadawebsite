import React from "react";
import styled from "styled-components";
import { device } from "../../device";

const Picture = styled.div`
  width: 90vw;
  height: 95vw;
  margin-left: 5vw;
  margin-bottom: 5vw;
  float: left;
  @media ${device.laptop} {
    width: 25vw;
    height: 60vh;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;

  &:hover {
    opacity: 1;
  }
`;
const Description = styled.p`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  color: white;
  font-size: 22px;
  padding: 16px;
`;
const Card = props => {
  return (
    <Picture>
      <div
        style={{
          width: "100%",
          height: "85%",
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Overlay>
          <Description>{props.description}</Description>
        </Overlay>
      </div>
      <div
        style={{
          width: "100%",
          height: "15%",
          textAlign: "center",
          backgroundColor: "#34495E",
          fontSize: 24
        }}
      >
        <p
          style={{
            position: "relative",
            marginTop: 0,
            color: "white",
            top: "25%"
          }}
        >
          {props.name}
        </p>
      </div>
    </Picture>
  );
};

export default Card;
