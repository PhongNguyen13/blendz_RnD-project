import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    selected: 0,
    list: []
});

export default (state = defaultState, action) => {

    if(action.type === constants.SELECT_ONE) {
        return state.set('selected', 1);
    }

    if(action.type === constants.SELECT_TWO) {
        return state.set('selected', 2);
    }

    if(action.type === constants.SELECT_THREE) {
        return state.set('selected', 3);
    }
    
    if (action.type === constants.CHANGE_LIST) {
        return state.set('list', action.data);
    }
    return state;
}
