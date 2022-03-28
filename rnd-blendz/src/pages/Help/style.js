import styled from "styled-components";
import { mobile } from "../../responsive";

export const AccordionSection = styled.div`
    margin-top: 50px;
    margin bottom: 50px;
    margin-left: 180px;
    height: 50vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    &::-webkit-scrollbar {
        width: 10px;
        border: 1px solid black;
    }
    h1 {
        color: hotpink;
        position: relative;
        width: max-width;
        font-size: 35px;
    }
    h1::after {
        content: "";
        position: absolute;
        bottom: 0;
        margin-right: 200px;
        width: 310px;
        height: 2px;
        background-color: hotpink;
    }

    ${mobile({ height: "200px", padding: "0px 0px" })}
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  text-align: center;
  cursor: pointer;
  border: 2px solid #6db5ff;
  border-radius: 50px;
  margin: 10px 0;
  h2 {
    color: #1f5c9a;
    padding: 5px 10px 10px 10px;
    font-size: 17px;
    font-weight: normal;
    transition: all 0.5s ease-in;
  }
  span {
    margin: 0 10px 0 0;
    width: 25px;
    height: 25px;
    background: 8px 7px #6db5ff;
    border-radius: 50%;
    float: left;
    transition: all 0.5s ease-in;
  }
`;

export const Dropdown = styled.div`
  background-color: #6db5ff;
  color: #fff;
  width: 70%;
  display: flex;
  border-left: 2px solid #fff;
  border-radius: 50px;
  p {
    padding: 5px 10px 10px 10px;
    margin-left: 25px;
    font-size: 17px;
    text-align: left;
    line-height: 1.5;
  }
`;