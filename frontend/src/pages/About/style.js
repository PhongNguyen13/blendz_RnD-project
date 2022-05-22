import styled from "styled-components";
import { mobile } from "../../responsive";

export const AboutWrapper = styled.div`
    padding: 100px 0px;
    width: 100%;
    ${mobile({ padding: "10px 0px" })}
`;

export const RightWrap = styled.div`
    margin: auto;
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
        text-align: justify;
    }
`;

export const LeftWrap = styled.div`
    float: left;
    height: 300px;
    width: 300px;
    margin-left: 50px;

    image {
        flex:1 1 45rem;
    }
`;