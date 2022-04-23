import React, { Component } from "react";
import { ShopWrapper, ShopNav, ShopNavItem, ShopInforWrapper, ShopNavTitle, ShopInforItem, ShopInforTitle } from "./style";
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class Shop extends Component {
    render(){ 
        return(
            <ShopWrapper>
                <ShopNav>
                    <ShopNavTitle>Categories</ShopNavTitle>
                        <ShopNavItem onClick={() => this.props.handleInput()}>Machine</ShopNavItem>
                        <ShopNavItem onClick={() => this.props.handleInput2()}>Beverages</ShopNavItem>
                        <ShopNavItem onClick={() => this.props.handleInput3()}>Accessories</ShopNavItem>
                </ShopNav>
                <ShopInforWrapper>
                    {this.getMachineList()}
                </ShopInforWrapper>
            </ShopWrapper>
        )
    }

    getMachineList(){
        if(this.props.selected === "Machine"){
            const {list} = this.props;            
            return list.map((item) =>{
                return (
                    <ShopInforItem key={item.get('id')} >
                        <img src={item.get('imgUrl')}></img>
                        <ShopInforTitle>{item.get('name')}</ShopInforTitle>
                        <ShopInforTitle>{item.get('price')}</ShopInforTitle>
                    </ShopInforItem>
                    
                );
            });
        }else if (this.props.selected === "Beverages"){
            return 2;
        }else if (this.props.selected === "Accessories") {
            return 3;
        }else{
            return(
                <h1>Welcome to Blendz</h1>
            )
        }
    }
}

const mapStateTothis= (state) => {
    return {
        selected: state.getIn(['shop','selected']),
        list: state.getIn(['shop','machine'])
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        handleInput(){
            dispatch(actionCreators.selectMachine());
            dispatch(actionCreators.getMachineList());
        },
        handleInput2(){
            dispatch(actionCreators.selectBeverages());
        },
        handleInput3(){
            dispatch(actionCreators.selectAccessories());
        }
    }
}


export default connect(mapStateTothis, mapDispathTothis)(Shop);