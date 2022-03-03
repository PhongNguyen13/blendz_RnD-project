import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, Addition, Button, NavSearch } from './style';
import { connect } from 'react-redux'; 
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store/all.js';

class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { focused, login, logout} = this.props;
        return(
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>                        
                    <NavSearch className={focused ? 'focused' : ''}
                    onFocus={this.props.handleInputFocus}
                    onBlur={this.props.handleInputBlur}
                    />
                    <NavItem>About</NavItem>                                         
                    <NavItem>Help</NavItem>                 
                    <NavItem>Shop</NavItem>              
                    <NavItem href="/">Home</NavItem>    
                </Nav>
                <Addition>
                    <Button>Cart</Button>
                    {
                        login ? <Button onClick={logout} >Log out</Button> : <Button href="/login">Login</Button>
                    }
                </Addition>
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
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}



export default connect(mapStateToProps, mapDispathToProprs)(Header);