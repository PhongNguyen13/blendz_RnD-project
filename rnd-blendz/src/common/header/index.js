import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, Addition, Button } from './style';

class Header extends Component {
    render() {
        return(
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>
                    <NavItem>About</NavItem>                       
                    <NavItem>Help</NavItem>                 
                    <NavItem>Shop</NavItem>              
                    <NavItem>Home</NavItem>    
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