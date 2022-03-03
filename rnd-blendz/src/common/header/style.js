import styled from "styled-components";
import logoPic from '../../statics/Blendz.png';
import logoPic2 from '../../statics/HLogo.png';

export const HeaderWrapper = styled.div`
    z-index: 1;
    position absolute;
    height: auto;
    top:0;
    left:0;
    right:0;
    background: #FF9900;
    border-bottom: 2px solid #7B7776;
`;

export const Logo = styled.a`
    position: absolute;
    top: 10;
    left: 0;
    display: block;
    width: 735%;
    height: 100%;
    background: url(${logoPic2});
    background-repeat: no-repeat;
`;

export const Nav = styled.div`
    height: 100%;
    width: 50%;
    margin: 0 auto;
`;

export const NavItem = styled.a`
    line-height: 500%;
    padding: 0 1.5%;
    font-size: 120%;
    float: right;
    color: #FDFEFE;
    text-decoration : none ;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 25%;

`;

export const Button = styled.a`
    float: right;
    color: #FDFEFE;
    background: #A0A0A0  ;
    margin-top: 5%;
    margin-right: 20%;
    padding: 0 8%;
    line-height:300%;
    border-radius: 5px;
    border: 1px solid #9EA482;
    text-decoration : none ;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
`;