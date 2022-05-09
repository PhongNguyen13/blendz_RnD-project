import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const getUserdetail = (name, email, cart,number) => ({
    type: constants.GETUSER,
    name,
    email,
    cart,
    number
})

export const getUser = (UID) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/' + UID).then((res) => {
            const result = res.data;
            //console.log(res);
            dispatch(getUserdetail(result.name, result.email));
        }).catch(() => {
            console.log('error');
        })
    }
}
