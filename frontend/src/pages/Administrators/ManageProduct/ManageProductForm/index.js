import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, TitleWrapper, TitleContent, ProductFrom, ProductFromWrapper,Input, Button} from "../../style";
import { StyledTextArea } from "../../../ContactUs/style";
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreator';

class ManageProductForm extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        var params = this.props.match.params.id;
        console.log(params);
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <TitleWrapper>
                    <TitleContent>Product From</TitleContent>
                    </TitleWrapper>
                    <ProductFromWrapper>
                    <ProductFrom>
                            Product Name: <Input ref={(input) => {this.name = input}}
                            placeholder="Name of the product" required/>
                    </ProductFrom>
                    <ProductFrom>                        
                            Display Price: <Input ref={(input) => {this.DisplayPrice = input}}
                            placeholder="$16.00" required/>
                    </ProductFrom>
                    <ProductFrom>
                            Price for Pay: <Input type="number" ref={(input) => {this.PriceToPay = input}}
                            placeholder="16.00" required/>
                    </ProductFrom>
                    <ProductFrom>
                            ImgUrl: <Input ref={(input) => {this.ImgUrl = input}} required/>
                    </ProductFrom>
                    <ProductFrom>
                            Description (Please use &lt;br&gt;to start a new line):
                            <StyledTextArea name="message" ref={(input) => {this.des = input}}
                            placeholder="For example: New product <br> Name:new product <br>" required/>
                    </ProductFrom>
                    <Button onClick={() => this.props.AddProduct(
                        this.name.value, 
                        this.DisplayPrice.value,
                        this.PriceToPay.value,
                        this.ImgUrl.value,
                        this.des.value,
                        params)}>Submit</Button>
                    </ProductFromWrapper>
                </Wrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
}

const mapStateTothis= (state) => {
    return {
        
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        AddProduct(name, dprice, PriceToPay, ImgUrl, des, params){
            dispatch(actionCreators.updateProduct(name, dprice, PriceToPay, ImgUrl, des, params))
        }
    }
}


export default connect(mapStateTothis, mapDispathTothis)(ManageProductForm);