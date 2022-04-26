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
}

export default Detail;