import React, { Component } from "react";
import { connect } from 'react-redux';
import { DetailWrapper, Itemimg, ItemInfo, Description, Button } from "./style";
import * as actionCreators from './store/actionCreators';
import { Link } from "react-router-dom";

class Detail extends Component {

    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        let Price = this.props.priceforPay;
        let Type = this.props.type;

        return(
            <DetailWrapper>
                <Itemimg>
                    <img src={this.props.imgUrl} alt=''/>
                </Itemimg>
                <ItemInfo>         
                    <h1>{this.props.name}</h1>
                    <p>{this.props.price}</p>
                    <input ref={(input) => {this.number = input}} />
                    <Button onClick={() => this.props.putIteminCart(UID,this.props.match.params.id, this.number, Price, Type)}>Put it in Cart</Button>
                </ItemInfo>
                <Description> 
                    <h1>Description</h1>
                    {this.getDesc()}
                </Description> 
            </DetailWrapper>
        )
    }
    componentDidMount(){
        var storage=window.localStorage;
        var Select = storage.getItem("Select");
        var UID = storage.getItem("UID");
        if (Select === "Machine"){
            this.props.getMachine(this.props.match.params.id);
        }else if (Select === "Beverage"){
            this.props.getBeverage(this.props.match.params.id);
        }else if(Select === "Accessorie"){
            this.props.getAccessorie(this.props.match.params.id);
        }else{
            return console.log("error to get detail");
        }
    }
    getDesc(){
        const {description} = this.props;
        return description.map((item) => {
            return(
                <li>{item}</li>
            )
        })
    }


}

const mapStateTothis= (state) =>{
    return{
        imgUrl: state.getIn(['detail', 'imgUrl']),
        name: state.getIn(['detail', 'name']),
        price: state.getIn(['detail', 'price']),
        description: state.getIn(['detail', 'description']),
        type: state.getIn(['detail', 'type']),
        priceforPay: state.getIn(['detail', 'priceforPay'])
    }
}
const mapDispathTothis = (dispatch) =>({
    getMachine(id){
        dispatch(actionCreators.getMachineDetail(id));
    },
    getBeverage(id){
        dispatch(actionCreators.getBeverageDetail(id));
    },
    getAccessorie(id){
        dispatch(actionCreators.getAccessorieDetail(id));
    },
    putIteminCart(UID, itemID, number, Price, Type){
        dispatch(actionCreators.postItem(UID, itemID, number.value, Price, Type));
    }
})

export default connect(mapStateTothis, mapDispathTothis)(Detail);
