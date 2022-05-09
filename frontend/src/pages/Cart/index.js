import React, { Component } from "react";
import { CartWrapper, CartHeader,CartHeaderTitle, CartHeaderContent, 
    CartContentWrappet, CartItemWrapper, ItemName, ItemNumber, Item, CartItemTitleWrapper, 
    CartItemTitle, Button, SummaryWrapper} from "./style";
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
                <CartHeader>
                <CartHeaderTitle>Cart</CartHeaderTitle>            
                <CartHeaderContent>User: <a href="/user">{this.props.username}</a></CartHeaderContent>
                </CartHeader>
                    <CartContentWrappet>
                        <CartItemTitleWrapper>
                            <CartItemTitle>Product name</CartItemTitle>
                            <CartItemTitle>Quantity</CartItemTitle>
                        </CartItemTitleWrapper>
                        <h1>{this.getCartList()}</h1>
                    </CartContentWrappet>
                    <SummaryWrapper>Total:</SummaryWrapper>
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
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        return cartlist.map((item) => {
            return(
                <CartItemWrapper>
                    <Item key={item.get('id')}>
                        <ItemName>{item.get('id')}</ItemName>
                        <ItemNumber>{item.get('number')}</ItemNumber>
                        <Button onClick={() => this.props.deleteitem(ID,item.get('id'))}><a href="/cart">Delete</a></Button>
                    </Item>
                </CartItemWrapper>
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
        },
        deleteitem(uid, itemID){
            dispatch(cartActionCreators.deleteCartitem(uid, itemID))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(Cart);