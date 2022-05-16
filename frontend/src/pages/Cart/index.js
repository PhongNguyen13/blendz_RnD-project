import React, { Component } from "react";
import { CartWrapper, CartHeader,CartHeaderTitle, CartHeaderContent, 
    CartContentWrappet, CartItemWrapper, Item, CartItem, 
    Button, SummaryWrapper, Summarytext, Disappear, PayButton, CartItemTitle } from "./style";
import { connect } from 'react-redux';
import { actionCreator as userActionCreators } from ".././User/store";
import { actionCreators as cartActionCreators } from "./store/index";

class Cart extends Component {
    render(){
        var storage=window.localStorage;
        var Islogin = storage.getItem("Islogin");
        var ID = storage.getItem("UID");
        this.props.getUserinfo(ID);
        if (Islogin === "login"){
        return(
            <CartWrapper>
                <CartHeader>
                <CartHeaderTitle>Cart</CartHeaderTitle>            
                <CartHeaderContent>User: <a href="/user">{this.props.username}</a></CartHeaderContent>
                </CartHeader>
                    

                    <CartContentWrappet>
                        <h1>{this.getPenddingListTitle()}</h1>
                        <h1>{this.getPenddingList()}</h1>
                    </CartContentWrappet>
                    

                    <CartContentWrappet>
                        <h1>{this.getCartListTitle()}</h1>
                        <h1>{this.getCartList()}</h1>
                    </CartContentWrappet>


                    <SummaryWrapper>
                        <Summarytext>Total: ${this.props.CartTotalPrice}</Summarytext>
                        {this.CheckTotalPrice()}
                    </SummaryWrapper>
                    
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
        this.props.getpenddingInfo(ID);
    }

    CheckTotalPrice(){
        if(this.props.CartTotalPrice === 0){
            return (
                <h1>Noting To Pay</h1>
            )
        }else if (this.props.CartTotalPrice > 0){
            return(
                <PayButton><a href="/payment">Pay Now</a></PayButton>
            )
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    getCartListTitle(){
        const cartlistSize = this.props.cartlist.size;
        if(cartlistSize === 0){
            return (
                <h1>Nothing in Cart</h1>
            )
        }else if (cartlistSize > 0){
            return[
                <div>
                <CartItemTitle>
                    Cart
                </CartItemTitle>
            <CartItemWrapper>
                <CartItem>Product name</CartItem>
                <CartItem>Quantity</CartItem>
                <CartItem>Price</CartItem>
                <CartItem>Total Price</CartItem>
            </CartItemWrapper>
            </div>
            ]
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    getCartList(){
        const{cartlist} = this.props;
        const cartlistSize = this.props.cartlist.size;
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        var Single = 0;
        var Total = 0;
        Total = Total + Single
        if(cartlistSize === 0){
            this.props.updateTotalPrice(ID, 0);
            return (
                console.log("Noting in the cart")
            )
        }else if (cartlistSize > 0){

            return cartlist.map((item) => {

                return[
                    <Item>
                        <CartItemWrapper key={item.get('id')}>
                            <CartItem>{item.get('id')}</CartItem>
                            <CartItem>{item.get('number')}</CartItem>
                            <CartItem>{item.get('Price')}</CartItem>
                            <CartItem>{Single = item.get('number') * item.get('Price')}</CartItem>
                        </CartItemWrapper>
                            <Disappear>{Total = Total + Single}</Disappear>
                            {this.getTotalPrice(Total)}
                            <Button onClick={() => this.props.deleteitem(ID,item.get('id'))}><a href="/cart">Delete</a></Button>
                    </Item>
                ]
            }
            )
        }else{
            return (
                <h1>Error</h1>
            )
        }
    }

    getTotalPrice(Totalprice){
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        this.props.updateTotalPrice(ID, Totalprice);
    }

    getPenddingListTitle(){
        const PenddinglistSize = this.props.penddinglist.size;
        if(PenddinglistSize === 0){
            return (
                <h1>Nothing in Pendding</h1>
            )
        }else if (PenddinglistSize > 0){
            return[
                <div>
                <CartItemTitle>
                Pendding
                </CartItemTitle>
                <CartItemWrapper>
                <CartItem>Product name</CartItem>
                <CartItem>Quantity</CartItem>
                <CartItem>Price</CartItem>
                <CartItem>Total Price</CartItem>
                </CartItemWrapper>
                </div>
            ]
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    getPenddingList(){
        const{penddinglist} = this.props;
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        const PenddinglistSize = this.props.penddinglist.size;
        if(PenddinglistSize === 0 ){
            console.log("Noting in pendding list")
        }else if (PenddinglistSize > 0){
            return penddinglist.map((item) => {
                return(
                    <Item>
                            <CartItemWrapper key={item.get('id')}>
                                <CartItem>{item.get('id')}</CartItem>
                                <CartItem>{item.get('number')}</CartItem>
                                <CartItem>{item.get('Price')}</CartItem>
                                <CartItem>{item.get('number') * item.get('Price')}</CartItem>
                            </CartItemWrapper>
                            <Button onClick={() => this.props.deletependdingitem(ID,item.get('id'))}><a href="/cart">Delete</a></Button>

                    </Item>
                )
            })
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login'),
        username: state.getIn(['user', 'name']),
        useremail: state.getIn(['user', 'email']),
        cartlist: state.getIn(['cart','cartlist']),
        penddinglist: state.getIn(['cart','penddinglist']),
        CartTotalPrice: state.getIn(['user','CartTotalPrice'])
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
        },
        getpenddingInfo(id){
            dispatch(cartActionCreators.getPendding(id))
        },
        deletependdingitem(uid, itemID){
            dispatch(cartActionCreators.deletePenddingitem(uid, itemID))
        },
        updateTotalPrice(uid, TotalNumber){
            dispatch(cartActionCreators.updateTotalPrice(uid, TotalNumber))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(Cart);