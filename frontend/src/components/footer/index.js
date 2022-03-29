import React, { Component } from "react";
import { FooterNav, FooterNavItem, FooterWrapper, FooterInfo, FooterInfoItem, Copyright } from "./style";

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <FooterNav>
                    <FooterNavItem href="/">Home</FooterNavItem>
                    <FooterNavItem href="/shop">Shop</FooterNavItem>
                    <FooterNavItem href="/help">Help</FooterNavItem>
                    <FooterNavItem href="/about">About</FooterNavItem>
                </FooterNav>

                <FooterInfo>
                    <FooterInfoItem>
                        Address: 
                        282 Fordyce Road
                        Helensville
                        Auckland 0874
                    </FooterInfoItem>
                    <FooterInfoItem>
                        Contact: 0800 2 MIX IT (0800 264 948)
                    </FooterInfoItem>
                    <FooterInfoItem>
                        Email: info@blendz.co.nz
                    </FooterInfoItem>
                    <FooterInfoItem>
                        Opening Hours: Monday-Friday 8:30am-5:00pm
                    </FooterInfoItem>
                   
                </FooterInfo>

                <Copyright>Copyright &copy; Blendz All rights reserved.</Copyright>

            </FooterWrapper>
        )
    }
}

export default Footer;