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
      ></div>
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
