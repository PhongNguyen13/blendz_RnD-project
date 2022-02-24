import styled from "styled-components";
import logoPic from '../../statics/Logo.png'

export const HeaderWrapper = styled.div`
    height: 60px;
    background: #FFC300;
    border-bottom: 2px solid #7B7776;
`;

export const Logo = styled.a`
    position: absolute;
    top: 10;
    left: 0;
    display: block;
    width: 200px;
    height: 50px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    height: 100%;
    width: 1000px;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 20px;
    float: right;
    color: #FDFEFE;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    width:350px;
`

export const Button = styled.div`
    float: right;
    color: #FDFEFE;
    background: #A0A0A0  ;
    margin-top: 15px;
    margin-right: 60px;
    padding: 0 20px;
    line-height:38px;
    border-radius: 5px;
    border: 1px solid #9EA482;
`