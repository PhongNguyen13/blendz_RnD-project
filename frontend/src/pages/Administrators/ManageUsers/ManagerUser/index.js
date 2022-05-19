import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Wrapper, Title, UserListWrapper} from "../../style";
import { CartItemTitle , CartItemWrapper, CartItem,Item, Button, CartContentWrappet} from "../../../Cart/style";
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreator';

class ManageUser extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        console.log(this.props.list);
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <Title>Manage User pendding</Title>
                    <UserListWrapper>
                        <CartContentWrappet>
                        {this.getPenddingListTitle()}
                        {this.getPenddingList()}
                        </CartContentWrappet>
                    </UserListWrapper>

                </Wrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
    componentDidMount(){
        this.props.GetUser(this.props.match.params.id);
    }

    getPenddingListTitle(){
        const PenddinglistSize = this.props.list.size;
        if(PenddinglistSize === 0){
            return (
                <h1>Nothing in Pendding</h1>
            )
        }else if (PenddinglistSize > 0){
            return[
                <div>
                <CartItemTitle>
                Pendding
                </CartItemTitle>
                <CartItemWrapper>
                <CartItem>Product name</CartItem>
                <CartItem>Quantity</CartItem>
                <CartItem>Price</CartItem>
                <CartItem>Total Price</CartItem>
                </CartItemWrapper>
                </div>
            ]
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    getPenddingList(){
        const{list} = this.props;
        var ID = this.props.match.params.id;
        const PenddinglistSize = this.props.list.size;
        if(PenddinglistSize === 0 ){
            console.log("Noting in pendding list")
        }else if (PenddinglistSize > 0){
            return list.map((item) => {
                return(
                    <Item>
                            <CartItemWrapper key={item.get('id')}>
                                <CartItem>{item.get('id')}</CartItem>
                                <CartItem>{item.get('number')}</CartItem>
                                <CartItem>{item.get('Price')}</CartItem>
                                <CartItem>{item.get('number') * item.get('Price')}</CartItem>
                            </CartItemWrapper>
                            <Button onClick={() => this.props.approveItem(
                                ID,
                                item.get('id'),
                                item.get('number'),
                                item.get('Price'))}>Approve</Button>
                    </Item>
                )
            })
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

}

const mapStateTothis= (state) => {
    return {
        list:state.getIn(['Admin','penddingList'])
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        GetUser(id){
            dispatch(actionCreators.getUserdetail(id));
        },
        approveItem(uid, itemID, number, Price){
            dispatch(actionCreators.postToCart(uid, itemID, number, Price));
        }
    }
}


export default connect(mapStateTothis, mapDispathTothis)(ManageUser);