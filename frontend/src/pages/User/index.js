import React, { Component } from "react";
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/Login/store/index';
import { actionCreator as userActionCreators } from "./store";
import { Button, ProfileTitle } from "./style";

class User extends Component {
    render(){
        return(
            <div>
            <ProfileTitle>Welcome to your profiles </ProfileTitle>
            <h1>{this.props.username}</h1>
            <h1>{this.props.useremail}</h1>
            <Button onClick={() => this.props.logout()}>Logout</Button>
            </div>
        )
    }

    componentDidMount(){
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        this.props.getUserinfo(ID);
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login'),
        username: state.getIn(['user', 'name']),
        useremail: state.getIn(['user', 'email'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        logout(){
            dispatch(loginActionCreators.log_out())
        },
        getUserinfo(id){
            dispatch(userActionCreators.getUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(User);