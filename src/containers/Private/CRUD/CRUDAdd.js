/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { notification } from 'antd';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { delayTime } from 'utils/helpers';

import CRUDService from './api/CRUDService';
import PostForms from './components/PostForms';
import { CRUDSchema } from './validation';

const CRUDAdd = ({ history, match }) => {
  const handleSubmit = async (values, actions) => {
    console.log({ values, actions });

    actions.setSubmitting(true);
    try {
      const response = await CRUDService.add({ ...values });

      if (response) {
        notification.success({
          message: 'Created',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          duration: 2,
        });
      }
      // history.push('/settings/crud');
      delayTime(2000, () => history.push('/settings/crud'));
      actions.setSubmitting(false);
    } catch (error) {
      console.log(error, 'Error');

      actions.setSubmitting(false);
    }
  };
  console.log(match, history, 'TEST123123');

  return (
    <Formik
      initialValues={{
        body: '',
        title: '',
        userId: [''],
      }}
      onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={CRUDSchema}
      render={formikBag => <PostForms {...formikBag} />}
    />
  );
};

CRUDAdd.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default CRUDAdd;
