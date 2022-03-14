import styled from "styled-components";
import icon1 from '../../statics/Shopicon1.png'
import icon2 from '../../statics/Shopicon2.png'
import icon3 from '../../statics/Shopicon3.png'

export const ShopWrapper = styled.div`
    z-index:-1;
    position absolute;
    top: 0;
    bottom 0;
    left: 0;
    right: 0;
    padding-top: 10%;
`;

export const ShopIconWrapper = styled.div`
    height: 60%;
    width: 70%;
    margin: 2% auto;
`;

export const ShopIcon = styled.div`
    height: 50%;
    width: 20%;
    float: left;
    margin: 5% auto;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    
    &.icon1{
        background: url(${icon1});
        background-size: contain;
        background-repeat: no-repeat;
    }

    &.icon2{
        margin-left: 20%;
        background: url(${icon2});
        background-size: contain;
        background-repeat: no-repeat;
    }

    &.icon3{
        float: right;
        background: url(${icon3});
        background-size: contain;
        background-repeat: no-repeat;
    }
`;
