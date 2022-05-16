import React, { Component } from "react";
import { connect } from 'react-redux';
import { DetailWrapper, Itemimg, ItemInfo, Description, Button, InputWrapper, InputButton ,Input} from "./style";
import * as actionCreators from './store/actionCreators';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '1'};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeplusone = this.handleChangeplusone.bind(this);
        this.handleChangeminusone = this.handleChangeminusone.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleChangeplusone(event) {
        let plus = this.state.value;
        plus++;
        this.setState({value: plus})
        this.props.updateQuantity(plus);
    }

    handleChangeminusone(event){
        let minus = this.state.value;
        if (minus === 1) {
            this.setState({value: 1})
        }else if (minus >= 2){
            minus--;
            this.setState({value: minus})
            this.props.updateQuantity(minus);
        }
    }

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
                    <h2>Quantity</h2>
                    <InputWrapper>
                        <InputButton onClick={this.handleChangeminusone}>-</InputButton>
                        <Input value={this.props.Quantity} onChange={this.handleChange}> {this.props.Quantity} </Input>
                        <InputButton onClick={this.handleChangeplusone}>+</InputButton>
                    </InputWrapper>
                    <Button onClick={() => this.props.putIteminCart(UID,this.props.match.params.id, this.props.Quantity , Price, Type)}>Put it in Cart</Button>
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

    getDesc() {
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
        priceforPay: state.getIn(['detail', 'priceforPay']),
        Quantity: state.getIn(['detail', 'Quantity'])
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
        dispatch(actionCreators.postItem(UID, itemID, number, Price, Type));
    },
    updateQuantity(number){
        dispatch(actionCreators.QUANTITY(number));
    }
})

export default connect(mapStateTothis, mapDispathTothis)(Detail);