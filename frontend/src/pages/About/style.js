import styled from "styled-components";
import { mobile } from "../../responsive";

export const AboutWrapper = styled.div`
    padding: 100px 50px;
    ${mobile({ padding: "10px 0px" })}
`;

// export const LeftWrap = styled.div`
//     float: left;
//     height: 350px;
//     width: 350px;
//     margin-left: 50px;
//     margin-top: 50px;

//     image {
//         width: 100%;
//         flex:1 1 45rem;
//     }
// `;

export const RightWrap = styled.div`
    // margin-left: 350px;
    // margin-right: 50px;
    background-color: #ADD8E6;
`;

export const Title = styled.h1`
    padding-top: 0px;
    text-align: center;
    font-size: 3rem;
    color: white;
    font-weight: bold;

    span {
        margin-left: 10px;
        color: #0047AB;
    }
`;

export const Content = styled.div`
    text-align: justify;
    font-size: 15px;
    flex:1 1 45rem;
    padding:2rem;

    p {
        font-size: 1.2rem;
        color:black;
        padding:1rem 0;
        line-height: 1.8;
        text-align: justify;
    }
`;