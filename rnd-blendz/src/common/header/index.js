import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, Addition, Button } from './style';

class Header extends Component {
    render() {
        return(
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>
                    <NavItem href="./about">About</NavItem>                                         
                    <NavItem href="./help">Help</NavItem>                 
                    <NavItem href="./shop">Shop</NavItem>              
                    <NavItem href="/" >Home</NavItem>    
                </Nav>
                <Addition>
                    <Button href="/cart">Cart</Button>
                    <Button href="/login">Login</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;