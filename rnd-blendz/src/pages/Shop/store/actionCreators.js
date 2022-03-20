import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const selectone = () => ({
    type: constants.SELECT_ONE
});

export const selecttwo = () => ({
    type: constants.SELECT_TWO
});

export const selectthree = () => ({
    type: constants.SELECT_THREE
});

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/shopList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}