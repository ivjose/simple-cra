import { combineReducers } from 'redux';
import authReducers from './authReducers';

const rootReducer = combineReducers({
  auth: authReducers.authentication,
});
export default rootReducer;
