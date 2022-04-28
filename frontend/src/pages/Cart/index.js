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
            return(
                <CartWrapper>
                   <h1>Please Login</h1> 
                </CartWrapper>
            )
        }
    }
}

export default Cart;