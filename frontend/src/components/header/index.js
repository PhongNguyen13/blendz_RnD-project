import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem } from './style';
import { Badge } from "@material-ui/core";
import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/Login/store/index';

class Header extends Component {
    render() {
        const { login, logout} = this.props;
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem href="/">HOME</NavItem>
                    <NavItem href="/shop">SHOP</NavItem>
                    <NavItem href="/help">HELP</NavItem>
                    <NavItem href="/about">ABOUT</NavItem>
                    {
                        login ? <NavItem href="/user"><AccountCircle /></NavItem> : <NavItem href="/login"><AccountCircle /></NavItem>
                    }
                    <NavItem href="/cart">
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </NavItem>
                </Nav>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login'),
        Currentuser: state.getIn(['login','Currentuser'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        logout(){
            dispatch(loginActionCreators.log_out())
        },
        getUser(){
            dispatch(loginActionCreators.get_User())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(Header);