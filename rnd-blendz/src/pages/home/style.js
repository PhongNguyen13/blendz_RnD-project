import styled from "styled-components";
import HomePic from '../../statics/HomeImage.png'

export const HomeWrapper = styled.div`
    z-index:-1;
    position absolute;
    top: 0;
    bottom 0;
    left: 0;
    right: 0;
    padding-top: 10%;
    padding-right:15%;
    padding-left: 15%;
`;

export const RightArea = styled.div`
    float: right;
    height: 50%;
    width: 50%;
`;

export const RightItem = styled.div`
    color: grey;
    &.title{
        line-height: 200%;
        text-align: center;
        height: 40%;
        font-size: 300%;
    }
    &.text{
        text-align: left;
        font-size: 120%;
    }
`;

export const LeftArea = styled.div`
    float: left;
    height: 70%;
    width: 37%;
    background: url(${HomePic});
    background-size: contain;
`;
