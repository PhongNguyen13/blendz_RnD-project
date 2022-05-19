import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Wrapper, Title, UserWrapper, UserListWrapper} from "../style";
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreator';

class ManageUsers extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");      
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <Title>Manage User pendding</Title>
                    <UserListWrapper>
                    {this.showUserList()}
                    </UserListWrapper>

                </Wrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
    componentDidMount(){
        this.props.GetAllUsers();
    }

    showUserList(){
        const {userList} = this.props;
        return userList.map((item) =>{
            const Pendding = item.get('Pendding');
            if(Pendding === "Yes"){
                return (
                    <UserWrapper>
                        <Link key={item.get('id')} to={`/Administrators/ManageUser/${item.get('id')}`} >
                            <p>{item.get('name')}</p>
                            <p>{item.get('email')}</p>
                        </Link>
                    </UserWrapper>
                        );
            }else{
            }
        });
    }
}

const mapStateTothis= (state) => {
    return {
        userList: state.getIn(['Admin','userList']),
        list:state.getIn(['Admin','penddingList'])
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        GetAllUsers(){
            dispatch(actionCreators.getUserList());
        },
        GetUser(id){
            dispatch(actionCreators.getUserdetail(id));
        }

    }
}


export default connect(mapStateTothis, mapDispathTothis)(ManageUsers);