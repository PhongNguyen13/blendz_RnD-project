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

const changeList = (result) => ({
    type: constants.CHANGELIST,
    data: fromJS(result)
})

export const getMachineList = () => {
    return (dispatch) => {
        var storage=window.localStorage;
        storage.setItem("Select", "Machine");
        axios.get('https://blendz.herokuapp.com/api/machines').then((res) => {
            const result = res.data;
            dispatch(changeList(result));
        }).catch(() => {
            console.log('error');
        })
    }
}
export const getBeveragesList = () => {
    return (dispatch) => {
        var storage=window.localStorage;
        storage.setItem("Select", "Beverage");
        axios.get('https://blendz.herokuapp.com/api/beverages').then((res) => {
            const result = res.data;
            dispatch(changeList(result));
        }).catch(() => {
            console.log('error');
        })
    }
}

export const getAccessoriesList = () => {
    return (dispatch) => {
        var storage=window.localStorage;
        storage.setItem("Select", "Accessorie");
        axios.get('https://blendz.herokuapp.com/api/accessories').then((res) => {
            const result = res.data;
            dispatch(changeList(result));
        }).catch(() => {
            console.log('error');
        })
    }
}