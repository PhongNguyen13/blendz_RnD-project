import React, { PureComponent } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Input, LoginBox, LoginWrapper } from './style';
import { actionCreators } from './store/all.js';

class Login extends PureComponent {
    render(){
        const { loginStatus } = this.props;

        if (!loginStatus) {
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="Account" ref={(input) => {this.account = input}}/>
                        <Input placeholder="Password" type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>Login</Button>
                    </LoginBox>
                </LoginWrapper>    
            )
        }else{
            return <Navigate to='/'/>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.get('login').get('login')
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordELEM){
        dispatch(actionCreators.login(accountElem.value, passwordELEM.value));
    }
});

export default connect(mapState, mapDispatch)(Login);