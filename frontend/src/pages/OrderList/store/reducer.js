import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    Orderlist: [],
    OrderDetaillist: []
})

const orderstate = (state = defaultState, action) => {
    
    if (action.type === constants.GETORDERLIST) {
        return state.set('Orderlist',action.data);
    }

    if (action.type === constants.GETORDERLISTDETAIL) {
        return state.set('OrderDetaillist',action.data);
    }

    return state;
}

export default orderstate;