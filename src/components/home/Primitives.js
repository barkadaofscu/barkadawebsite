import styled from "styled-components";
import { device } from "../device";

export const Page = styled.div`
  width: "100vw";
  height: "auto";
  padding-top: 4vh;
  padding-bottom: 4vh;
  background-color: white;
  position: relative;
  z-index: 4;
  @media ${device.laptop} {
    text-align: ${props => props.float || "center"};
    font-size: 68px;
  }
`;
export const PageTitle = styled.p`
  font-size: 60px;
  font-weight: bold;
  color: ${props => props.color ? props.color : "black"};
  margin: 0;
  @media ${device.laptop} {
    font-size: 68px;
    text-align: ${props => props.float || "center"};
  }
`;

export const Container = styled.div`
  width: 80%;
  height: auto;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 24px;
  margin-bottom: 24px;
  @media ${device.laptop} {
    float: ${props => props.float || "none"};
  }
`;

export const Logo = styled.img`
  width: 80vw;
  height: auto;
  margin-top: 50%;
  float: left;
  margin-left: 10vw;
  @media ${device.laptop} {
    width: 40vw;
    margin-top: 5%;
    margin-left: 30vw;
  }
`;
export const PageTag = styled.p`
  font-size: 24px;
  color: ${props => props.color ? props.color : "black"};
  margin: 0;
  text-align: inherit;
`;
export const PageSpan = styled.p`
  font-size: 18px;
  color: ${props => props.color ? props.color : "black"};
`;
export const Row = styled.div`
  width: 80%;
  height: auto;
  display: inline-block;
  margin-left: 10%;
  margin-right: 10%;
`;
export const Column = styled.div`
  margin: 0;
  @media ${device.laptop} {
    width: 50%;
    height: 100%;
    float: left;
    display: inline-block;
  }
  @media ${device.mobileL} {
    width: 100%;
    height: 50%;
  }
`;
