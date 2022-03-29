import styled from "styled-components";
import { mobile } from "../../responsive";

export const FooterWrapper = styled.div`
    // z-index: 1;
    // position absolute;
    // height: 100px;
    // bottom:0;
    // left:0;
    // right:0;
    background: #383838;
    display: flex;
    flex-direction: column;
    ${mobile({ flexDirection: "column" })}
`;

export const FooterNav = styled.div `
    // width: 500px;
    // height: 25px;
    // padding: 0 50px;
    text-align: center;
    margin: 10px auto;
`;

export const FooterNavItem = styled.a`
    color: grey;
    padding: 0 10px;
    text-decoration : none;
    &:hover {
        color: white;
    }
`;

export const FooterInfo = styled.div`
    text-align: center;
    margin: 10px auto;
`;

export const FooterInfoItem = styled.a`
    color: grey;  
    // display: flex;
    // flex-direction: column;
    // text-align: center;
    // padding: 0 10px;
    // text-decoration : none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export const Copyright = styled.div`
    text-align: center;
    margin: 10px auto;
    color: grey;
`;