import styled from "styled-components";
import { mobile } from "../../responsive";
import About from '../../assets/about.png';

export const AboutWrapper = styled.div`
    padding: 100px 100px;

    // ${mobile({ padding: "10px 0px" })}
`;

export const RightWrap = styled.div`
    margin: auto;
    // float: right;
    // height: 300px;
    // width: 500px;
    // border-radius: 35px;
    // box-shadow: 12px 12px 2px 1px rgba(192, 109, 31, 0.2);
    // background: rgba(255, 212, 22, 0.2);
`;

export const Title = styled.h1`
    padding-top: 0px;
    text-align: center;
    font-size: 30px;
    color: #008000;
    font-weight: bold;
`;

export const Content = styled.div`
    padding: 40px 50px;
    text-align: justify;
    font-size: 15px;
    p {
        margin: 10px 0px;
        line-height: 1.5; 
    }
`;

export const LeftWrap = styled.div`
    // float: left;
    // height: 300px;
    // width: 300px;
    background: url(${About});
    background-size: contain;
`;