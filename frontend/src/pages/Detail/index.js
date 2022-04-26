import React, { Component } from "react";
import { connect } from 'react-redux';
import { DetailWrapper, Itemimg, ItemInfo } from "./style";
import * as actionCreators from './store/actionCreators';

class Detail extends Component {
    render(){
        return(
            <DetailWrapper>
                <Itemimg>
                </Itemimg>
                <ItemInfo>
                </ItemInfo>
            </DetailWrapper>
            
        )
    }
    componentDidMount(){
        this.props.getProductDetail();
        console.log("success");
}
}


const mapStateTothis= (state) => {
    return {
        product: state.getIn(['detail','product'])
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        getProductDetail(){
            dispatch(actionCreators.getProduct());
        }
    }
}


export default connect(mapStateTothis, mapDispathTothis)(Detail);