import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const GetCart = (result) => ({
    type: constants.GETCART,
    data: fromJS(result)
})

export const getCart = (uid) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/cart/'+ uid).then((res) => {
            const result = res.data;
            console.log(res.status);

            dispatch(GetCart(result));
        }).catch(() => {
            console.log('error');
        })
    }
}

export const deleteCartitem = (uid, itemID) => {
    return () => {
        let postdata ={
            "itemID": itemID
        };
        axios.post('http://localhost:8080/api/user/cart/delete/' + uid, postdata).then(res =>{
            //console.log(res);
        })
    }
}

//Pendding-----------------------------------------------------------------------------------------------------

const GetPendding = (result) => ({
    type: constants.GETPENDDING,
    data: fromJS(result)
})

export const getPendding = (uid) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/Pendding/'+ uid).then((res) => {
            const result = res.data;
            //console.log(res.data);
            dispatch(GetPendding(result));
        }).catch(() => {
            console.log('error');
        })
    }
}

export const deletePenddingitem = (uid, itemID) => {
    return () => {
        let postdata ={
            "itemID": itemID
        };
        axios.post('http://localhost:8080/api/user/Pendding/delete/' + uid, postdata).then(res =>{
            //console.log(res);
        })
    }
}

export const updateTotalPrice = (uid, TotalPrice) => {
    return () => {
        let postdata ={
            "CartTotalPrice": TotalPrice
        };
        axios.post('http://localhost:8080/api/user/update/' + uid, postdata).then(res =>{
            //console.log(res);
            //console.log(TotalPrice);
        })
    }
}

