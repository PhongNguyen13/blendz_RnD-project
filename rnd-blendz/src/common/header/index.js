import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem } from './style';
import { Badge } from "@material-ui/core";
import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";

// import { connect } from 'react-redux';
// import { actionCreators } from './store';
// import { actionCreators as loginActionCreators } from '../../pages/Login/store/all.js';

class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem href="/">HOME</NavItem>
                    <NavItem href="/shop">SHOP</NavItem>
                    <NavItem href="/help">HELP</NavItem>
                    <NavItem href="/about">ABOUT</NavItem>
                    <NavItem href="/login">
                        <AccountCircle />
                    </NavItem>
                    <NavItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </NavItem>
                </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header;