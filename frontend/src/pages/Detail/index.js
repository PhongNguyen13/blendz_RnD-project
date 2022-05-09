import React, { Component } from "react";
import { connect } from 'react-redux';
import { DetailWrapper, Itemimg, ItemInfo, Description, Button } from "./style";
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
                    <h1>{this.props.name}</h1>
                    <p>{this.props.price}</p>
                    <input ref={(input) => {this.number = input}} />
                    <Button onClick={() => this.props.putIteminCart(UID,this.props.match.params.id, this.number)}></Button>
                </ItemInfo>
                <Description> 
                    <h1>Description</h1>
                    {/* {description} */}
                    {this.getDes}
                    {/* <li>{this.props.description[0]}</li>
                    <li>{this.props.description[1]}</li>
                    <li>{this.props.description[2]}</li>
                    <li>{this.props.description[3]}</li>
                    <li>{this.props.description[4]}</li>
                    <li>{this.props.description[5]}</li>
                    <li>{this.props.description[6]}</li>
                    <li>{this.props.description[7]}</li>
                    <li>{this.props.description[8]}</li>
                    <li>{this.props.description[9]}</li>
                    <li>{this.props.description[10]}</li> */}
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

    getDes(){
        const {description} = this.props;
        return description.map((item) => {
            return(
                <h1>{item}</h1>
            )
        })
        
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
    },
    putIteminCart(UID, itemID, number){
        dispatch(actionCreators.postItem(UID, itemID,number.value));
    }
})

export default connect(mapStateTothis, mapDispathTothis)(Detail);


// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import { DetailWrapper, Itemimg, ItemInfo, Description, Button } from "./style";
// import * as actionCreators from './store/actionCreators';
// import { Link } from "react-router-dom";

// class Detail extends Component {
   
//     render(){
//         // const array = this.props.description;
//         var storage=window.localStorage;
//         var UID = storage.getItem("UID");
//         // let Price = this.props.priceforPay;
//         // let Type = this.props.type;
//         const description = this.props.description.map((element)=>{
//             return <li>{element}</li>;
//         });
            
//         return(
//             <DetailWrapper>
//                 <Itemimg>
//                     <img src={this.props.imgUrl} alt=''/>
//                 </Itemimg>
//                 <ItemInfo>         
//                     <h1>{this.props.name}</h1>
//                     <p>{this.props.price}</p>
//                     <input ref={(input) => {this.number = input}} />
//                     <Button onClick={() => this.props.putIteminCart(UID,this.props.match.params.id, this.number)}></Button>
//                 </ItemInfo>
//                 <Description> 
//                     <h1>Description</h1>
//                     <p>{description}</p>
//                     {/* <p>{this.props.description}</p> */}
//                 </Description> 
//             </DetailWrapper>
//         )
//     }
//     componentDidMount(){
//         var storage=window.localStorage;
//         var Select = storage.getItem("Select");
//         var UID = storage.getItem("UID");
//         if (Select === "Machine"){
//             this.props.getMachine(this.props.match.params.id);
//         }else if (Select === "Beverage"){
//             this.props.getBeverage(this.props.match.params.id);
//         }else if(Select === "Accessorie"){
//             this.props.getAccessorie(this.props.match.params.id);
//         }else{
//             return console.log("error to get detail");
//         }
//     }
// }

// const mapStateTothis= (state) =>{
//     return{
//         imgUrl: state.getIn(['detail', 'imgUrl']),
//         name: state.getIn(['detail', 'name']),
//         price: state.getIn(['detail', 'price']),
//         description: state.getIn(['detail', 'description'])
//     }
// }
// const mapDispathTothis = (dispatch) =>({
//     getMachine(id){
//         dispatch(actionCreators.getMachineDetail(id));
//     },
//     getBeverage(id){
//         dispatch(actionCreators.getBeverageDetail(id));
//     },
//     getAccessorie(id){
//         dispatch(actionCreators.getAccessorieDetail(id));
//     },
//     putIteminCart(UID, itemID, number){
//         dispatch(actionCreators.postItem(UID, itemID,number.value));
//     }
// })

// export default connect(mapStateTothis, mapDispathTothis)(Detail);
