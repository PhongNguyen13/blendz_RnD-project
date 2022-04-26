import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const getProductDetail = (result) => ({
    type: constants.GETDETAIL,
    data: fromJS(result)
})

export const getProduct = () => {
    return (dispatch) => {
        axios.get('/api/Allproduct.json').then((res) => {
            const result = res.data;
            dispatch(getProductDetail(result));
        }).catch(() => {
            console.log('error');
        })
    }
}