import React, { Component } from "react";
import { ShopIcon, ShopIconWrapper, ShopWrapper} from "./style";

class Shop extends Component {
    render(){
        return(
            <ShopWrapper>
                <ShopIconWrapper>
                    <ShopIcon className="icon1"></ShopIcon>
                    <ShopIcon className="icon2"></ShopIcon>
                    <ShopIcon className="icon3"></ShopIcon>
                </ShopIconWrapper>
            </ShopWrapper>
        )
    }
}

export default Shop;