import React, { Component } from "react";
import { RegisterBox, RegisterWrapper, Content, Input, Button } from './style';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators2 } from "../Login/store/index";

class Register extends Component {
    render(){
        const { loginStatus } = this.props;

        if(!loginStatus) {
            return(
                <RegisterWrapper>
                    <RegisterBox>
                        <Content className="Title">Blendz Register</Content>
                        <Content className="STitle">Please enter your email:</Content>
                        <Input placeholder="Email" ref={(input) => {this.email = input}}/>
                        <Content className="STitle">Please enter your Password:</Content>
                        <Input placeholder="New Password" type='password' ref={(input) => {this.newpassword = input}}/>
                        <Content className="STitle">Please enter your Password again to confirm:</Content>
                        <Input placeholder="Comfirm Password" type='password' ref={(input) => {this.newpassword2 = input}}/>
                        <Button onClick={() => this.props.Signup(this.email, this.newpassword, this.newpassword2)}>Create Account</Button>                    
                    </RegisterBox>
                </RegisterWrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    Signup(emailElem, newpasswordElem, newpasswordElem2){
        dispatch(actionCreators2.sign_up(emailElem.value,newpasswordElem.value, newpasswordElem2.value));
    }
});

export default connect(mapState, mapDispatch)(Register);