import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionLogin } from 'actions/authAction';

import LoginForm from './components/LoginForm';
import validation from './validation';
import CONSTANTS from './constants';

const Login = ({ userLogin }) => {
  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(true);
    try {
      await userLogin(values.username, values.password);
      actions.setSubmitting(false);
    } catch (error) {
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <h1> {CONSTANTS.TITLE} </h1>
      <Link to="/dashboard">{CONSTANTS.TITLE}</Link>
      <Formik
        initialValues={{
          username: 'eve.holt@reqres.in',
          password: 'cityslicka',
        }}
        onSubmit={handleSubmit}
        enableReinitialize={true}
        validationSchema={validation.login}
        render={formikBag => <LoginForm {...formikBag} />}
      />
    </>
  );
};

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  userLogin: actionLogin,
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
