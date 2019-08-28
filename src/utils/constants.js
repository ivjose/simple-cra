const API = {
  URL: `${process.env.REACT_APP_API}/api`,
  TYPES: {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
    AUTH_SUCCESS: 'AUTH_SUCCESS',
    AUTH_ERROR: 'AUTH_ERROR',
  },
};

export default API;
