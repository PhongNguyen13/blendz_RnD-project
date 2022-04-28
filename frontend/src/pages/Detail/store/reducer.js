import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    imgUrl:'',
    name:'',
    price:''
});

const detailstate = (state = defaultState, action) => {
    
    if (action.type === constants.GETDETAIL) {
        return state.merge({
            imgUrl: action.imgUrl,
            name:action.name,
            price:action.price
        });
    }

    return state;
}

export default detailstate;