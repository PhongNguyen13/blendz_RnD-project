import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreator from './store/actionCreator';

class OrderList extends Component {
    render(){
        return(
            <div>
            <h1>Order List</h1>
            <div>{this.getOrderList()}</div>
            </div>
        )
    }

    componentDidMount(){
        var storage=window.localStorage;
        var uid = storage.getItem("UID");
        this.props.OrderList(uid);
    }

    getOrderList(){
            const {Orderlist} = this.props;        
            return Orderlist.map((item) =>{
                return (
                    <Link key={item.get('id')} to={`/OrderList/OrderDetail/${item.get('id')}`}>
                    <div>
                        <p>{item.get('id')}</p>
                    </div>
                    </Link>
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