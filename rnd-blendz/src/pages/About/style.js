import styled from "styled-components";
import { mobile } from "../../responsive";

export const AboutWrapper = styled.div`
    // padding-top: 130px;
    // padding-right: 300px;
    // padding-left: 300px;
    padding: 100px 100px;
    ${mobile({ padding: "10px 0px" })}
`;

export const InfoWrapper = styled.div`
    height: 300px;
    width: 700px;
    margin: auto;
    border-radius: 35px;
    box-shadow: 12px 12px 2px 1px rgba(192, 109, 31, 0.2);
    background: rgba(255, 212, 22, 0.2);
`;



export const Title = styled.h1`
    padding-top: 70px;
    text-align: center;
    font-size: 30px;
`;

export const Content = styled.p`
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: left;
    font-size: 10px;
`;