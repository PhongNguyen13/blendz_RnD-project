import React, { Component } from "react";
import { connect } from 'react-redux';
import { DetailWrapper, Itemimg, ItemInfo, Description, Button } from "./style";
import * as actionCreators from './store/actionCreators';
import { Link } from "react-router-dom";

class Detail extends Component {
    render(){
        return(
            <DetailWrapper>
                <Itemimg>
                    <img src={this.props.imgUrl} alt=''/>
                </Itemimg>
                <ItemInfo>         
                    <h1>{this.props.name}</h1>
                    <p>{this.props.price}</p>
                </ItemInfo>
                <Description> 
                    <h1>Description</h1>
                    <p>{this.props.description}</p>
                </Description> 
            </DetailWrapper>
        )
    }
    componentDidMount(){
        var storage=window.localStorage;
        var Select = storage.getItem("Select");
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
        price: state.getIn(['detail', 'price']),
        description: state.getIn(['detail', 'description'])
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
    }
})

export default connect(mapStateTothis, mapDispathTothis)(Detail);