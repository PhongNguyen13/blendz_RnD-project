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
    ${mobile({ flexDirection: "column" })}
`;

export const FooterNav = styled.div `
    width: 500px;
    height: 25px;
    padding: 0 50px;
    text-align: center;
    margin: 10px auto;
`;

export const FooterNavItem = styled.a`
    color: grey;
    padding: 0 10px;
    text-decoration : none;
`;

export const FooterInfo = styled.div`
    text-align: center;
    margin: 10px auto;
    color: grey;
`;

export const Copyright = styled.div`
    text-align: center;
    color: grey;
`;

// export const FooterWrapper = styled.div`
//     z-index: 1;
//     position absolute;
//     height: 100px;
//     bottom:0;
//     left:0;
//     right:0;

//     background: #383838;

// `;

// export const FooterNav = styled.div `
//     width: 500px;
//     height: 25px;
//     padding: 0 50px;
//     text-align: center;
//     margin: 10px auto;
// `;

// export const FooterNavItem = styled.a`
//     color: grey;
//     padding: 0 10px;
//     text-decoration : none;
// `;

// export const FooterInfo = styled.div`
//     text-align: center;
//     margin: 10px auto;
//     color: grey;
// `;

// export const Copyright = styled.div`
//     text-align: center;
//     color: grey;
// `;

