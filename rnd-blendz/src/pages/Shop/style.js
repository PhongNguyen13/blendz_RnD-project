import styled from "styled-components";
import icon1 from '../../statics/Shopicon1.png'
import icon2 from '../../statics/Shopicon2.png'
import icon3 from '../../statics/Shopicon3.png'

export const ShopWrapper = styled.div`
    // z-index:-1;
    // position absolute;
    // top: 0;
    // bottom 0;
    // left: 0;
    // right: 0;
    padding-top: 200px;
    padding-right:300px;
    padding-left: 300px;
    margin-left: auto;
    margin-right: auto;
`;

export const ShopIconWrapper = styled.div`
    height: 400px;
    width: 800px;
    margin: auto;
    margin-top: 50px;
`

export const Title = styled.div`
    margin: auto;
    // height: 60px;
    // width: 1000px;
    text-align: center;
    font-size: 30px;
    color: grey;
`;

export const ShopIcon = styled.div`
    height: 100px;
    width: 100px;
    float: left;
    margin: 50px;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    
    &.icon1{
        background: url(${icon1});
        background-size: 100px 100px;
    }
    &.icon2{
        background: url(${icon2});
        background-size: 100px 100px;
    }
    &.icon3{
        background: url(${icon3});
        background-size: 100px 100px;
    }
`;