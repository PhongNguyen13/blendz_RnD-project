import React, { Component } from "react";
import { CartWrapper } from "./style";

class Cart extends Component {
    render(){
        var storage=window.localStorage;
        var Islogin = storage.getItem("Islogin");
        if (Islogin === "login"){
        return(
            <CartWrapper>
               <h1>Cart Page</h1> 
            </CartWrapper>
        )
        }else{
            <h1>Please login</h1>
        }
    }
}

export default Cart;