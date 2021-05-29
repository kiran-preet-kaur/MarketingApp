import { combineReducers } from 'redux';
import loginReducer from '../modules/Login/loginReducer';

export default combineReducers({
  login: loginReducer,
});