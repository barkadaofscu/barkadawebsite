import styled from "styled-components";
import { device } from "../device";

export const PageTitle = styled.p`
  font-size: 68px;
  font-weight: bold;
  color: black;
  margin: 0;
  text-align: center;
`;
export const PageTag = styled.p`
  font-size: 24px;
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
export const BoldHeader = styled.p`
  font-size: 28px;
  font-weight: bold;
  line-height: 150%;
  margin: 0;
`;
export const PageSpan = styled.p`
  font-size: 18px;
  text-align: center;
  line-height: 150%;
  margin: 0;
`;
export const Row = styled.div`
  width: 80%;
  height: 50%;
  display: inline-block;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 24px;
  text-align: inherit;
`;
export const Column = styled.div`
  width: {props => props.width ? props.width : "50%"};
  height: 100%;
  margin: 0;
  text-align: center;
  display: inline-block;
`;
export const ColumnOne = styled.div`
  margin: 0;
  width: ${props => (props.width ? props.width : "50%")};
  height: 100%;
  float: left;
  display: inline-block;
`;
export const Container = styled.div`
  width: 80%;
  height: auto;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 32px;
  margin-bottom: 32px;
`;
