import * as constants from './constants';
import { fromJS } from 'immutable';
import { getPrice } from './actionCreators';

const defaultState = fromJS({
    cartlist:[],
<<<<<<< HEAD
    penddinglist:[]
=======
    penddinglist:[],
<<<<<<< HEAD
    rentlist:[],
    Approverentlist:[],
    NullApproveRentList:false,
    AddressState:false
=======
    rentlist:[]
>>>>>>> 401a8ca219fc7d1c002a490a43cf0304708e5623
>>>>>>> 38edb3c6fb58291d5560a710d71ce3a60613bed9
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
<<<<<<< HEAD
    if (action.type === constants.GETAPPROVERENTLIST) {
        return state.set('Approverentlist',action.data);
    }
    if (action.type === constants.LISTISNULL) {
        return state.set('NullApproveRentList',action.value);
    }
    if (action.type === constants.ADDRESSSTATE) {
        return state.set('AddressState',action.value);
    }
=======

>>>>>>> 401a8ca219fc7d1c002a490a43cf0304708e5623

>>>>>>> 38edb3c6fb58291d5560a710d71ce3a60613bed9
    return state;
}

export default Cartstate;

