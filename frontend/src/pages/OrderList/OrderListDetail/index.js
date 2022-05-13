import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionCreator from '../store/actionCreator';

class OrderListDetail extends Component {
    render(){
        
        return(
            <div>
            <h1>Order Detail </h1>
            <div>{this.getOrderDetailList()}</div>
            </div>
        )
    }

    componentDidMount(){
        var storage=window.localStorage;
        var uid = storage.getItem("UID");
        const orderID = this.props.match.params;
        this.props.OrderList(uid, orderID);
    }

    getOrderDetailList(){
        const {OrderDetaillist} = this.props;        
        return OrderDetaillist.map((item) =>{
            return (
                <div key={item.get('id')}>
                <div>
                    <p>{item.get('id')}</p>
                    <p>{item.get('number')}</p>
                    <p>{item.get('Price')}</p>
                </div>
                
                <div>------------------------------</div>
                </div>
            );
        });
    }
}

const mapStateToProps = (state) => {
    return {
        OrderDetaillist: state.getIn(['order','OrderDetaillist'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        OrderList(uid, orderID){
            dispatch(actionCreator.getOrderDetail(uid, orderID))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(OrderListDetail);
