import styled from "styled-components";

export const LoginWrapper = styled.div`
    z-index:-1;
    position absolute;
    top: 0;
    bottom 0;
    left: 0;
    right: 0;
    background: grey;

`;

export const LoginBox = styled.div`
    width: 600px;
    height: 350px;
    margin: 200px auto;
    background: white;
    padding-top: 80px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 40px;
    line-height: 30px;
    padding: 0 20px;
    margin: 40px auto;
    color: #777;
`;

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
`;