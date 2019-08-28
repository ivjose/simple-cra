import request from 'utils/api';

const signIn = ({ email, password }) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      email,
      password,
    },
  });
};

const AuthService = {
  signIn,
};

export default AuthService;
