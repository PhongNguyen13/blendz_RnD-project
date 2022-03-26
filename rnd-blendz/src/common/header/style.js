import styled from "styled-components";
import logoPic from '../../statics/logo.jpg';
import { mobile } from "../../responsive";

export const HeaderWrapper = styled.nav`
    background: #FF9900;
    position: sticky;
    height: 100px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border-bottom: 2px solid #7B7776;
    ${mobile({ height: "80px", padding: "10px 0px" })}
`;

export const Logo = styled.a`
    width: 200px;
    height: 100px;
    background: url(${logoPic});   
    background-size: contain;
    background-repeat: no-repeat;
    
    ${mobile({ width: "180px", height: "80px" })}
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center" })}
`;

export const NavItem = styled.a`   
    font-size: 15px;
    cursor: pointer;
    margin-left: 25px;
    color: #FDFEFE;
    text-decoration: none;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;