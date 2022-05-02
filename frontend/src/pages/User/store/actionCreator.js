import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const getUserdetail = (name, email) => ({
    type: constants.GETUSER,
    name,
    email
})

export const getUser = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/' + id).then((res) => {
            const result = res.data;
            console.log(res);
            dispatch(getUserdetail(result.name, result.email));
        }).catch(() => {
            console.log('error');
        })
    }
}
