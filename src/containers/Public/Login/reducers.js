import CONSTANTS from './constants';

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = CONSTANTS.TYPES;

const isLogin = !!(
  localStorage.getItem('token') && localStorage.getItem('authentication')
);
const initialState = isLogin ? { loggedIn: true } : { loggedIn: false };

const loginReducers = {
  authentication: (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          token: action.payload.token,
          loader: true,
        };
      case LOGIN_FAILURE:
        return {
          loggedIn: false,
          loginFailed: true,
          error: action.payload,
        };
      case LOGOUT:
        return {
          loggedIn: false,
        };
      default:
        return state;
    }
  },
};

export default loginReducers;
