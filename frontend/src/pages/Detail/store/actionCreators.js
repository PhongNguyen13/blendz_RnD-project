import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changedetail = (data) => ({
    type: constants.GETDETAIL,
    data:data
})


export const getMachineDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/machine/' + id).then((res) => {
            const result = res.data;
            //console.log(result.description);
            dispatch(changedetail(result));
        }).catch(() => {
            console.log('error');
        })
    }
}


export const getBeverageDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/beverage/' + id).then((res) => {
            const result = res.data;
            dispatch(changedetail(result));
        }).catch(() => {
            console.log('error');
        })
    }
}


export const getAccessorieDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/accessorie/' + id).then((res) => {
            const result = res.data;
            console.log("result");
            dispatch(changedetail(result));
        }).catch(() => {
            console.log('error');
        })
    }
}

export const postItem = (UID, itemID, number, Price, Type) => {
    return (dispatch) => {
        console.log(number);
        let postdata = {
            "itemID": itemID,
            "number":number,
            "Price":Price
        };
        
        if(Type === "machine"){
            if(number > 1){
                axios.post('http://localhost:8080/api/user/update/Pendding/' + UID, postdata).then(res=>{
                console.log(res);})
                let updatePendingState = {
                    "Pendding": "Yes"
                }
                axios.post('http://localhost:8080/api/user/update/' + UID, updatePendingState).then(res=>{
                console.log(res);})
            }else{
                axios.post('http://localhost:8080/api/user/update/cart/' + UID, postdata).then(res=>{
                console.log(res);})
            }
        }else{
            axios.post('http://localhost:8080/api/user/update/cart/' + UID, postdata).then(res=>{
            console.log(res);
        })
        }
    }
}


const inputQUANTITY = (QUANTITY) => ({
    type: constants.QUANTITY,
    value: QUANTITY
})

export const QUANTITY = (inputNumber) => {
    return (dispatch) => {
        dispatch(inputQUANTITY(inputNumber));
    }
}