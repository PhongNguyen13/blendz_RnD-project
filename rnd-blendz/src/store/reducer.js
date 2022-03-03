import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as loginReducer } from '../pages/Login/store';

const reducer = combineReducers({
    header: headerReducer,
    login: loginReducer
})

export default reducer;