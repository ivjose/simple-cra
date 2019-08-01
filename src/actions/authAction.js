import request from 'utils/api';
import CONSTANTS from 'utils/constants';
import { localStorage } from 'utils/helpers/localStorage';

const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = CONSTANTS.TYPES;

// eslint-disable-next-line import/prefer-default-export
export const actionLogin = (email, password) => async dispatch => {
  console.log(email, password, 'asdasdasdAction');
  dispatch({ type: LOGIN });

  try {
    const response = await request({
      url: '/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    });

    console.log(response, 'datasdsd');
    localStorage.save('token', response.token);
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
