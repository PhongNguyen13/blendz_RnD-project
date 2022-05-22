import * as constants from './constants';
import { fromJS } from 'immutable';
import { getPrice } from './actionCreators';

const defaultState = fromJS({
    cartlist:[],
<<<<<<< HEAD
    penddinglist:[]
=======
    penddinglist:[],
    rentlist:[]
>>>>>>> 401a8ca219fc7d1c002a490a43cf0304708e5623
});

const Cartstate = (state = defaultState, action) => {

    
    if (action.type === constants.GETPENDDING) {
        return state.set('penddinglist',action.data);
    }

    if (action.type === constants.GETCART) {
        return state.set('cartlist',action.data);
    }
<<<<<<< HEAD
=======
    if (action.type === constants.GETRENTLIST) {
        return state.set('rentlist',action.data);
    }

>>>>>>> 401a8ca219fc7d1c002a490a43cf0304708e5623

    return state;
}

export default Cartstate;