import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    imgUrl:'',
    name:'',
    price:'',
    description:[],
    type:'',
    priceforPay:'',
    Quantity:1
});

const detailstate = (state = defaultState, action) => {
    
    if (action.type === constants.GETDETAIL) {
        return state.merge({
            imgUrl: action.imgUrl,
            name:action.name,
            price:action.price,
            description:action.description,
            type:action.Type,
            priceforPay:action.priceforPay
        });
    }

    if (action.type === constants.QUANTITY){
        return state.set('Quantity', action.value);
    }

    return state;
}

export default detailstate;