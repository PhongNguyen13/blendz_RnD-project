import styled from "styled-components";

export const LoginWrapper = styled.div`
    top: 0;
    bottom 0;
    left: 0;
    right: 0;
`;

export const LoginBox = styled.div`
    width: 500px;
    height: 350px;
    margin: 200px auto;
    background: white;
    padding-top: 80px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Content = styled.div`
    &.Title{
        text-align: center;
        font-size: 25px;
            margin-bottom: 40px;
    }
    // &.STitle{
    //     margin-top: 20px;
    //     margin-bottom: 0px;
    //     margin-left:180px;
    //     font-size: 15px;
    // }
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 40px;
    line-height: 30px;
    padding: 0 20px;
    margin:auto;
    color: #777;
    .&Account{
        margin-top: 10px;
    }
    .&Password{
        margin-top: 20px;
`;

export const Button = styled.div`
    width: 220px;
    height: 35px;
    line-height: 30px;
    color: #fff;
    background: #E17631;
    border-radius: 5px;
    margin: 10px auto;
    margin-top: 40px;
    text-align: center;
    font-size: 20px;
    cursor:pointer;
`;

export const RegisterWrapper = styled.div`
    // width: 20%;
    // height: 8%;
    margin: 10px;
    text-align: center;
`;

export const Register = styled.a`
    width:80%;
    height:80%;
    color:black;
`;