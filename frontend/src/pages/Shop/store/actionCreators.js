import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const selectMachine = () => ({
    type: constants.SELECT_MACHINE
});

export const selectBeverages = () => ({
    type: constants.SELECT_BEVERAGES
});

export const selectAccessories = () => ({
    type: constants.SELECT_ACCESSORIES
});

const changeMachineList = (result) => ({
    type: constants.CHANGEtoMACHINELIST,
    data: fromJS(result)
})

export const getMachineList = () => {
    return (dispatch) => {
        axios.get('/api/Machine.json').then((res) => {
            const result = res.data;
            console.log(result);
            dispatch(changeMachineList(result));
        }).catch(() => {
            console.log('error');
        })
    }
}