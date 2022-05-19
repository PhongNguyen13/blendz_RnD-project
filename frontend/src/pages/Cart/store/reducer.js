import * as constants from './constants';
import { fromJS } from 'immutable';
import { getPrice } from './actionCreators';

const defaultState = fromJS({
    cartlist:[],
    penddinglist:[]
});

const Cartstate = (state = defaultState, action) => {

    
    if (action.type === constants.GETPENDDING) {
        return state.set('penddinglist',action.data);
    }

    if (action.type === constants.GETCART) {
        return state.set('cartlist',action.data);
    }

    return state;
}

export default Cartstate;