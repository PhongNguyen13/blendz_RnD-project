import React, { Component } from "react";
import { connect } from 'react-redux';
import { DetailWrapper, Itemimg, ItemInfo, Button } from "./style";
import * as actionCreators from './store/actionCreators';
import { Link } from "react-router-dom";

class Detail extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        return(
            <DetailWrapper>
                <Itemimg>
                    <img src={this.props.imgUrl} alt=''/>
                </Itemimg>
                <ItemInfo>
                    {this.props.name}
                    <h1>
                    {this.props.price}
                    <input ref={(input) => {this.number = input}} />
                    <Button onClick={() => this.props.putIteminCart(UID,this.props.match.params.id, this.number)}></Button>
                    </h1>
                </ItemInfo>
                
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
}

const mapStateTothis= (state) =>{
    return{
        imgUrl: state.getIn(['detail', 'imgUrl']),
        name: state.getIn(['detail', 'name']),
        price: state.getIn(['detail', 'price'])
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
    putIteminCart(UID, itemID, number){
        dispatch(actionCreators.postItem(UID, itemID,number.value));
    }
})

export default connect(mapStateTothis, mapDispathTothis)(Detail);
