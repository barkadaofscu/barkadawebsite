import React from "react";
import styled from "styled-components";
import ImageFade from "../../shared/imagefade";
import { Link } from "react-router-dom";
import { device } from "../../device";

const Picture = styled.div`
  width: 80vw;
  height: 80vw;
  margin-left: 5vw;
  float: left;
  @media ${device.tablet} {
    width: 20vw;
    height: 50vh;
    display: inline-block;
    margin-left: 7.66vw;
    margin-right: 0vw;
  }
`;

const Title = styled.p`
  font-size: 16px;
  color: black;
  padding: 18px;
  margin: 0;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  opacity: 0;
  border-radius: 16px;
  transition: 0.5s ease;

  &:hover {
    opacity: 1;
  }
`;
const Description = styled.p`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 16px;
  border-radius: 16px;
  padding: 16px;
`;
const Card = props => {
    return (
        <Link to={props.link} style={{ textDecoration: "none" }}>
            <Picture>
                <div
                    style={{
                        width: "100%",
                        height: "85%",
                        backgroundImage: `url(${props.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "16px"
                    }}
                >
                    <Overlay>
                        <Description>{props.description}</Description>
                    </Overlay>
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        textAlign: "center"
                    }}
                >
                    <Title>{props.name}</Title>
                </div>
            </Picture>
        </Link>
    );
};

export default Card;
