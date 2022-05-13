import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const getUserdetail = (name, email,CartTotalPrice) => ({
    type: constants.GETUSER,
    name,
    email,
    CartTotalPrice
})

export const getUser = (UID) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/' + UID).then((res) => {
            const result = res.data;
            //console.log(res);
            //console.log(result.CartTotalPrice);
            dispatch(getUserdetail(result.name, result.email, result.CartTotalPrice));
        }).catch(() => {
            console.log('error');
        })
    }
}
