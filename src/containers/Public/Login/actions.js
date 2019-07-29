import request from 'utils/api';
import CONSTANTS from './constants';

const { LOGIN_SUCCESS, LOGIN_FAILURE } = CONSTANTS.TYPES;

// eslint-disable-next-line import/prefer-default-export
export const login = (email, password) => async dispatch => {
  console.log(email, password, 'asdasdasdAction');

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

    // localStorage.setItem('token', data.id);
    dispatch({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    // console.log(err.data.error, 'Errro');
    dispatch({ type: LOGIN_FAILURE, payload: error.data.error });
  }
};
