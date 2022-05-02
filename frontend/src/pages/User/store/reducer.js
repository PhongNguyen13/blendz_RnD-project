import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    name:'',
    email:''
});

const Userdetail  = (state = defaultState, action) => {
    
    if (action.type === constants.GETUSER) {
        return state.merge({
            name:action.name,
            email:action.email
        });
    }

    return state;
}

export default Userdetail ;