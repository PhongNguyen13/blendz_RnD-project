import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem } from './style';
import { Badge } from "@material-ui/core";
import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";

import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/Login/store/all.js';

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

        // const { login, logout } = this.props;

            {/* {login ? <NavItem onClick={logout}>SIGN OUT</NavItem> : <NavItem href="/login">SIGN IN</NavItem>} */}

                {/* <Addition>
                    {
                        login ? <Button onClick={logout} >Log out</Button> : <Button href="/login">Login</Button>
                    }
                    <Button>Cart</Button>
                </Addition> */}

// const mapStateToProps = (state) => {
//     return {
//         focused: state.get('header').get('focused'),
//         login: state.get('login').get('login')
//     }
// }

// const mapDispathToProprs = (dispatch) => {
//     return {
//         logout() {
//             dispatch(loginActionCreators.logout())
//         }
//     }
// }


/* export default connect(mapStateToProps, mapDispathToProprs)(Header);*/