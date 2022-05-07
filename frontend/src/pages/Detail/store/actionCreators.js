import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changedetail = (imgUrl, name, price, description) => ({
    type: constants.GETDETAIL,
    imgUrl,
    name,
    price,
    description
})

export const getMachineDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/machine/' + id).then((res) => {
            const result = res.data;
            dispatch(changedetail(result.imgUrl, result.name, result.price, result.description));
        }).catch(() => {
            console.log('error');
        })
    }
}


export const getBeverageDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/beverage/' + id).then((res) => {
            const result = res.data;
            dispatch(changedetail(result.imgUrl, result.name, result.price));
        }).catch(() => {
            console.log('error');
        })
    }
}


export const getAccessorieDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/accessorie/' + id).then((res) => {
            const result = res.data;
            dispatch(changedetail(result.imgUrl, result.name, result.price));
        }).catch(() => {
            console.log('error');
        })
    }
}