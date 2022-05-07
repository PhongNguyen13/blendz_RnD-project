import React, { Component } from "react";
import { CartWrapper } from "./style";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { actionCreator as userActionCreators } from ".././User/store";
import { actionCreators as cartActionCreators } from "./store/index";

class Cart extends Component {
    render(){
        var storage=window.localStorage;
        var Islogin = storage.getItem("Islogin");
        if (Islogin === "login"){
        return(
            <CartWrapper>
                <h1>Cart Page</h1>            
            <h1>{this.props.username}</h1>
            <h1>{this.props.useremail}</h1>
            <h1>{this.getCartList()}</h1>
            </CartWrapper>
        )
        }else{
            return(
                <CartWrapper>
                    <h1>Please Login</h1> 
                </CartWrapper>
            )
        }
    }

    componentDidMount(){
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        this.props.getUserinfo(ID);
        this.props.getcartInfo(ID);
    }

    getCartList(){
        const{cartlist} = this.props;
        return cartlist.map((item) => {
            return(
                <Link key={item.get('id')}>
                    <div>{item.get('id')}</div>
                    <div>{item.get('number')}</div>
                </Link>
            )
        })
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login'),
        username: state.getIn(['user', 'name']),
        useremail: state.getIn(['user', 'email']),
        cartlist: state.getIn(['cart','cartlist'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        getUserinfo(id){
            dispatch(userActionCreators.getUser(id))
        },
        getcartInfo(id){
            dispatch(cartActionCreators.getCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(Cart);