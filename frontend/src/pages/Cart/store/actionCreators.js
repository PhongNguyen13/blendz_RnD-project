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
            console.log("getcart");
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
            console.log(res);
        })
    }
}