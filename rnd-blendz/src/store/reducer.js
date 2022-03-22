import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as loginReducer } from '../pages/Login/store/all';

const reducer = combineReducers({
    header: headerReducer,
    login: loginReducer
})

export default reducer;