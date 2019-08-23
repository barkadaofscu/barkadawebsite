import styled from "styled-components";
import { device } from "../../device";

export const Page = styled.div`
  width: "100vw";
  height: "100%";
  background-color: white;
  position: relative;
  z-index: 4;
  @media ${device.laptop} {
    text-align: ${props => props.float || "center"};
    font-size: 68px;
    height: auto;
  }
`;
export const PageTitle = styled.p`
  font-size: 58px;
  font-weight: bold;
  color: ${props => (props.color ? props.color : "black")};
  margin: 0;
  text-align: "center";
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
  text-align: center;
  @media ${device.laptop} {
    text-align: ${props => props.float || "center"};
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
  font-size: 28px;
  color: ${props => (props.color ? props.color : "black")};
  margin-top: 24px;
  margin-top: 0;
  margin-bottom: 24px;
  text-align: inherit;
`;
export const BoldHeader = styled.p`
  font-size: 28px;
  font-weight: bold;
  line-height: 150%;
  margin: 0;
`;
export const BoldTag = styled.p`
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  margin: 0;
  @media ${device.laptop} {
    font-size: 28px;
    line-height: 150%;
  }
`;
export const PageSpan = styled.p`
  font-size: 20px;
  color: ${props => (props.color ? props.color : "black")};
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
export const Column = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  float: left;
  @media ${device.laptop} {
    width: ${props => (props.width ? props.width : "50%")};
    height: auto;
  }
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
export const FixedColumn = styled.div`
  margin: 0;
  width: ${props => (props.width ? props.width : "50%")};
  height: 100%;
  float: left;
  display: inline-block;
`