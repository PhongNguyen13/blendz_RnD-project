import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../pages/Login/store/index';
import { reducer as shopreducer } from '../pages/Shop/store/index';
import { reducer as detailreducer } from '../pages/Detail/store/index';
// import { reducer as userreducer } from '../pages/User/store/index';

const reducer = combineReducers({
    login: loginReducer,
    shop: shopreducer,
    detail: detailreducer
    // user: userreducer
})

export default reducer;