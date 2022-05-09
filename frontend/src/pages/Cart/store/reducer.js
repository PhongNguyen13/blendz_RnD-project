import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    cartlist:[]
});

const Cartstate = (state = defaultState, action) => {

    if (action.type === constants.GETCART) {
        return state.set('cartlist',action.data);
    }

    return state;
}

export default Cartstate;