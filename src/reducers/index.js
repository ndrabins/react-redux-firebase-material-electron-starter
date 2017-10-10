import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";

//Reducers
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  // router: routerReducer
});

export default rootReducer;
