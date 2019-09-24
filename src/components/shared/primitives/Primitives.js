import styled from "styled-components";
import { device } from "../../device";

export const BoldHeader = styled.p`
  font-size: 28px;
  font-weight: bold;
  line-height: 150%;
  color: ${props => (props.color ? props.color : "black")};
  margin: 0;
`;
export const BoldSpan = styled.p`
font-size: 18px;
font-weight: bold;
display: inline-block;
margin 0;
`;
export const BoldTag = styled.p`
  font-size: 28px;
  font-weight: bold;
  display: inline-block;
  margin: 0;
  @media ${device.laptop} {
    font-size: 28px;
    line-height: 150%;
  }
`;
export const Column = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  float: left;
  @media ${device.tablet} {
    width: ${props => (props.width ? props.width : "50%")};
    height: auto;
  tablet}
  @media ${device.mobileL} {
    width: ${props => (props.isFixed ? "50%" : "100%")};
    height: 100%;
  }
`;
export const ColumnOne = styled.div`
  margin: 0;
  width: ${props => (props.width ? props.width : "50%")};
  height: 100%;
  float: left;
  display: inline-block;
`;
export const Container = styled.div`
  width: 70%;
  height: auto;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  @media ${device.tablet} {
    text-align: ${props => props.float || "center"};
  }
`;
export const Content = styled.div`
  width: 90vw;
  height: auto;
  margin-top: 5vh;
  margin-left: 5vw;
  text-align: left;
  textalign: center;
  color: "white";
  background: rgba(64, 64, 64, 0.8);
  @media ${device.tablet} {
    width: 80vw;
    margin-left: 10vw;
  }
`;
export const FixedColumn = styled.div`
  margin: 0;
  width: ${props => (props.width ? props.width : "50%")};
  height: 100%;
  float: left;
  display: inline-block;
`;
export const Logo = styled.img`
  width: 80vw;
  height: auto;
  margin-top: 30%;
  float: left;
  margin-left: 10vw;
  @media ${device.tablet} {
    width: 40vw;
    margin-top: 5%;
    margin-left: 30vw;
  }
`;
export const Page = styled.div`
  width: "100vw";
  height: "100%";
  background-color: white;
  font-family: Helvetica;
  position: relative;
  z-index: 4;
  @media ${device.laptop} {
    text-align: ${props => props.float || "center"};
    font-size: 68px;
    height: auto;
  }
`;
export const PageSpan = styled.p`
  font-family: Helvetica;
  line-height: 150%;
  font-size: 18px;
  color: ${props => (props.color ? props.color : "black")};
  font-weight: 400;
  @media ${device.mobileL}{
      font-size: 12px;
  }
`;
export const PageTag = styled.p`
  font-size: 24px;
  color: ${props => (props.color ? props.color : "black")};
  margin-top: 24px;
  margin-top: 0;
  margin-bottom: 24px;
  text-align: inherit;
`;
export const PageTitle = styled.p`
  font-size: 48px;
  font-family: Helvetica;
  font-weight: bold;
  color: ${props => (props.color ? props.color : "black")};
  margin: 0;
  padding-bottom: 24px;
  text-align: "center";
  @media ${device.laptop} {
    font-size: 60px;
    text-align: ${props => props.float || "center"};
  }
`;
export const Row = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;
  @media ${device.laptop} {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`;
export const SmallLogo = styled.img`
  width: 40vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  @media ${device.tablet} {
    width: 18vw;
  }
`;
export const Title = styled.div`
  width: 90vw;
  height: auto;
  margin-left: 5vw;
  margin-right: 10vw;
  margin-top: 10%;
  font-size: 28px;
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500;
  color: white;
  background: linear-gradient(to right, #312aa9, #79acd0);
  @media ${device.tablet} {
    width: 80vw;
    margin-left: 10vw;
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 48px;
  }
`;
