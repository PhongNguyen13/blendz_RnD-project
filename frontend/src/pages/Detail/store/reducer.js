import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    imgUrl:'',
    name:'',
    price:'',
    description:[]
});

const detailstate = (state = defaultState, action) => {
    
    if (action.type === constants.GETDETAIL) {
        return state.merge({
            imgUrl: action.imgUrl,
            name:action.name,
            price:action.price,
            description:action.description
        });
    }

    return state;
}

export default detailstate;