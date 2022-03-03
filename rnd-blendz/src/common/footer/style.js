import styled from "styled-components";
import FooterlogoPic from '../../statics/FooterLogo.png'

export const FooterWrapper = styled.div`
    z-index: 1;
    position absolute;
    height: 12%;
    bottom:0;
    left:0;
    right:0;
`;

export const FooterNav = styled.div `
    width: 100%;
    height: 25%;
    text-align: center;
    margin: 0.5% auto;
`;

export const FooterNavItem = styled.a`
    color: grey;
    padding: 0 1%;
    text-decoration : none ;
`;

export const FooterImage = styled.div`
    margin: 0.5% auto;
    width: 4.2%;
    height: 17.5%;
    background: url(${FooterlogoPic});
`;

export const FooterInfo = styled.div`
    text-align: center;
    margin:auto;
    color: grey;
`;

