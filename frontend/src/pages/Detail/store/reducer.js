import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    product:[]
});

const detailstate = (state = defaultState, action) => {
    if(action.type === constants.GETDETAIL){
        return state.set('product',action.data)
    }
}

export default detailstate;