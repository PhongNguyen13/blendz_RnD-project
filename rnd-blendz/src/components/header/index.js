import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, Addition, Button } from './style';
import { Badge } from "@material-ui/core";
// import { ShoppingCartOutlined } from "@material-ui/icons";


import { connect } from 'react-redux'; 
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/Login/store/all.js';

class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { login, logout} = this.props;
        return(
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>  
                    <NavItem href="/">Home</NavItem>    
                    <NavItem href="/shop">Shop</NavItem>
                    <NavItem href="help">Help</NavItem>
                    <NavItem href="about">About</NavItem>             
                    <NavItem>
                        {/* <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge> */}
                    </NavItem>
                </Nav>
                {/* <Addition>
                    {
                        login ? <Button onClick={logout} >Log out</Button> : <Button href="/login">Login</Button>
                    }
                    <Button>Cart</Button>
                </Addition> */}
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        login: state.get('login').get('login')
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}



export default connect(mapStateToProps, mapDispathToProprs)(Header);