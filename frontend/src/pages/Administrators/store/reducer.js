import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    Productlist: [],
    userList:[],
    penddingList:[],
    productdetail:[]
})

const AdministratorsState = (state = defaultState, action) => {
    
    if (action.type === constants.GETPRODUCT) {
        return state.set('Productlist',action.data);
    }
    if (action.type === constants.GETUSERS) {
        return state.set('userList',action.data);
    }
    if (action.type === constants.GETUSER) {
        return state.set('penddingList',action.data);
    }
    if (action.type === constants.PRODUCTINFO) {
        return state.set('productdetail',action.data);
    }

    return state;
}

export default AdministratorsState;