import styled from "styled-components";
import { mobile } from "../../responsive";

export const AboutWrapper = styled.div`
    padding: 100px 50px;
    ${mobile({ padding: "10px 0px" })}
`;

export const RightWrap = styled.div`
    // margin-left: 350px;
    // margin-right: 50px;
    background-color: #ADD8E6;
    position: relative;
    // ${mobile({ position: "absolute" })};
`;

export const Title = styled.h1`
    text-align: center;
    color:#fff;
    font-size: 4rem;
    span{
        padding-left: 1rem;
        color:#0047AB;
        text-transform: uppercase;
    }
    // ${mobile({ styled: "font-size: 1rem" })};
`;

export const Content = styled.div`
    text-align: justify;
    flex:1 1 45rem;
    padding:2rem;
    p {
        font-size: 1.2rem;
        color:black;
        padding: 1rem 0;
        line-height: 1.8;
    }
`;