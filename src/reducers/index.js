import { combineReducers } from 'redux';

//Reducers
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,

});

export default rootReducer;
