import styled from "styled-components";
import HomePic from '../../assets/HomeImage.png'

export const HomeWrapper = styled.div`
<<<<<<< HEAD
    padding: 100px 100px;
`;

export const Title = styled.h1`
    padding-top: 40px;
    text-align: center;
    font-size: 25px;
    color: #008000;
`;

export const Text = styled.div`
    padding: 30px 30px;
    text-align: center;
    font-size: 15px;
    p {
        margin: 10px 0px;
    }
    strong {
        color: #008000;
    }
    a {
        color: #0000FF;
    }
`;
=======
    // z-index:-1;
    // position absolute;
    
    top: 0;
    bottom 0;
    left: 100px;
    right: 0;
    padding-top: 200px;
    padding-right:200px;
    padding-left: 100px;
    padding-bottom: 200px;
`;

export const RightArea = styled.div`
    // float: right;
    // height: 300px;
    // width: 500px;
`;

export const RightItem = styled.div`
    color: grey;
    &.title{
        line-height: 10px;
        text-align: center;
        height: 50px;
        font-size: 30px;
    }
    &.text{
        text-align: left;
        font-size: 15px;
    }
`;

export const LeftArea = styled.div`
    // float: left;
    // height: 300px;
    // width: 300px;
    background: url(${HomePic});
    background-size: contain;
`;
>>>>>>> 80c3a7c2b4bfa0aa80059741afb7eaf2e3e04827
