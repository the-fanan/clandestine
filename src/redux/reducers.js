import { combineReducers } from 'redux';
import authReducer from './auth/reducer.js';
import alertReducer from './alert/reducer.js';

export default combineReducers({
	auth: authReducer,
	alert: alertReducer,
});