import React, { Component } from "react";
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/Login/store/index';

class User extends Component {
    render(){
        return(
            <div>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
            <button onClick={() => this.props.logout()}></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login')
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        logout(){
            dispatch(loginActionCreators.log_out())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(User);