import * as yup from 'yup';

const validation = {
  login: yup.object().shape({
    username: yup.string().required('Username is required.'),
    password: yup
      .string()
      .min(6, "C'mon, your name is longer than that")
      .required('Password is required.'),
  }),
};

export default validation;
