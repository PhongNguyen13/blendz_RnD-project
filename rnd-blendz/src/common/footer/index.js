import React, { Component } from "react";
import { FooterImage, FooterNav, FooterNavItem, FooterWrapper, FooterInfo} from "./style";

class Footer extends Component {
    render(){
        return(
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            <FooterWrapper>
                <FooterNav>
                    <FooterNavItem href="/">Home</FooterNavItem>
                    <FooterNavItem>|</FooterNavItem> 
                    <FooterNavItem href="/shop">Shop</FooterNavItem>
                    <FooterNavItem>|</FooterNavItem> 
                    <FooterNavItem href="/help">Help</FooterNavItem>
                    <FooterNavItem>|</FooterNavItem> 
                    <FooterNavItem href="/about">About</FooterNavItem>                    
                </FooterNav>
                <FooterImage/>
                <FooterInfo>
                    Contact:022022222 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address:55d ssdadsa
                </FooterInfo>
            </FooterWrapper>
            </div>
        )
    }
}

export default Footer;