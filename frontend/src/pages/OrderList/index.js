import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreator from './store/actionCreator';
import { OrderWrapper, Title, OrderButton } from './style';

class OrderList extends Component {
    render(){
        return(
            <OrderWrapper>
            <Title>Order List</Title>
            <div>{this.getOrderList()}</div>
            </OrderWrapper>
        )
    }

    componentDidMount(){
        var storage=window.localStorage;
        var uid = storage.getItem("UID");
        this.props.OrderList(uid);
    }

    getOrderList(){
            const {Orderlist} = this.props;
            console.log(Orderlist.size);
            return Orderlist.map((item) =>{
                return (
                    <OrderButton>
                    <Link key={item.get('id')} to={`/OrderList/OrderDetail/${item.get('id')}`}>
                    <div>
                        <p>{item.get('id')}</p>
                    </div>
                    </Link>
                    </OrderButton>
                );
            });
        }
}

const mapStateToProps = (state) => {
    return {
        Orderlist: state.getIn(['order','Orderlist'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        OrderList(uid){
            dispatch(actionCreator.getOrderList(uid))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(OrderList);