import styled from "styled-components";
import { mobile } from "../../responsive";

export const AccordionSection = styled.div`
    // padding: 50px 100px;
    // flex-direction: column;
    margin: 50px 100px 50px 100px;
    width: max;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    &::-webkit-scrollbar {
        width: 10px;
        border: 1px solid black;
    }
    h1 {
<<<<<<< HEAD
        color: #3D550C;
=======
        color: #0047AB;
>>>>>>> 401a8ca219fc7d1c002a490a43cf0304708e5623
        position: relative;
        width: max-width;
        font-size: 35px;
        margin-bottom: 50px;
        font-weight: bold;
    }
    h1::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 47%;
        height: 2px;
        background-color: #0047AB;
    }

    p {
      position: relative;
      text-align: center;
      margin-top: 20px;
      font-size: 20px;
      color: #0047AB;
      font-weight: normal;
    }

    a {
      position: relative;
      color: #0047AB;
      font-weight: bold;
      font-size: 23px;
      text-decoration: none;
    }
     ${mobile({ padding: '0px 10px'})}
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 2px solid #FF9900;
  border-radius: 50px;
  margin: 10px 0;
  h2 {
    color: #191970;
    padding: 5px 10px 10px 10px;
    font-size: 17px;
    font-weight: normal;
    transition: all 0.5s ease-in;
  }
  span {
    margin: 0 10px 0 0;
    width: 25px;
    height: 25px;
    background: 8px 7px #0047AB;
    border-radius: 50%;
    float: left;
    transition: all 0.5s ease-in;
  }
`;

export const Dropdown = styled.div`
  background-color: #ADD8E6;
  width: 100%;
  display: flex;
  border-left: 2px solid #fff;
  border-radius: 30px;

  p {
    padding: 5px 10px 10px 10px;
    margin-left: 25px;
    font-size: 17px;
    text-align: left;
    line-height: 1.5;
    color:black;
    font-weight: normal;
  }

  a {
    color:black;
    font-weight: normal;
    text-decoration: underline;
    font-size: 17px;
  }
`;
