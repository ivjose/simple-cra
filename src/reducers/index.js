import { combineReducers } from 'redux';
import loginReducers from 'containers/Public/Login/reducers';

const rootReducer = combineReducers({
  auth: loginReducers.authentication,
});
export default rootReducer;
