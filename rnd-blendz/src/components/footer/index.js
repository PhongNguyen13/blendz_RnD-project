import React, { Component } from "react";
import { FooterNav, FooterNavItem, FooterWrapper, FooterInfo, Copyright} from "./style";

class Footer extends Component {
    render(){
        return(
            <FooterWrapper>
                <FooterNav>
                    <FooterNavItem href="/">Home</FooterNavItem>
                    <FooterNavItem href="/shop">Shop</FooterNavItem>
                    <FooterNavItem href="/help">Help</FooterNavItem>
                    <FooterNavItem href="/about">About</FooterNavItem>                    
                </FooterNav>
                <Copyright>
                     &copy; Blendz
                </Copyright>
                <FooterInfo>
                    Contact:022022222
                </FooterInfo>
                <FooterInfo>
                    Address:55d ssdadsa
                </FooterInfo>
                

            </FooterWrapper>
        )
    }
}

export default Footer;