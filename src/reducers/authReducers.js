import { localStorage } from 'utils/helpers/localStorage';
import CONSTANTS from 'utils/constants';

const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = CONSTANTS.TYPES;

const isLogin = !!localStorage.get('token');
const defaultState = {
  loader: false,
  token: '',
};
const initialState = isLogin
  ? { ...defaultState, loggedIn: true, token: localStorage.get('token') }
  : { ...defaultState, loggedIn: false };
console.log(isLogin, initialState, 'test');

const loginReducers = {
  authentication: (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          loader: true,
        };
      case LOGIN_SUCCESS:
        return {
          token: action.payload.token,
          loggedIn: true,
          loader: false,
        };
      case LOGIN_FAILURE:
        return {
          loggedIn: false,
          loader: false,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...defaultState,
          loggedIn: false,
        };
      default:
        return state;
    }
  },
};

export default loginReducers;
