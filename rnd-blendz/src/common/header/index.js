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
                    <Button>Cart</Button>
                    <Button>Login</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;