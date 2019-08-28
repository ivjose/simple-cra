import AuthService from 'api/AuthService';
import CONSTANTS from 'utils/constants';
import { localStorage } from 'utils/helpers/localStorage';

const {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  AUTH_SUCCESS,
  AUTH_ERROR,
} = CONSTANTS.TYPES;

// eslint-disable-next-line import/prefer-default-export
export const actionLogin = (email, password) => async dispatch => {
  console.log(email, password, 'asdasdasdAction');
  dispatch({ type: LOGIN });

  try {
    const response = await AuthService.signIn({ email, password });

    console.log(response, 'datasdsd');
    localStorage.save('token', response);
    dispatch({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    // console.log(err.data.error, 'Errro');
    dispatch({ type: LOGIN_FAILURE, payload: error.data.error });
  }
};

export const actionLogout = () => async dispatch => {
  localStorage.remove('token');
  await dispatch({ type: LOGOUT });
};

export const actionAuthChecker = () => async dispatch => {
  const token = localStorage.get('token');
  console.log('token DDDD', token);

  if (token) {
    dispatch({ type: AUTH_SUCCESS, payload: { token } });
  } else {
    dispatch({ type: AUTH_ERROR });
  }

  // try {
  //   const token = localStorage.get('token');
  //   dispatch({ type: LOGIN_SUCCESS, payload: { token } });
  // } catch (error) {
  //   await
  // }
};
