/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { notification } from 'antd';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { delayTime } from 'utils/helpers';

import CRUDService from './api/CRUDService';
import PostForms from './components/PostForms';
import { CRUDSchema } from './validation';
import { postsInitialData } from './constants';

const CURDEdit = ({ match, history }) => {
  const [post, getPost] = React.useState({ ...postsInitialData });

  React.useEffect(() => {
    const loadData = async id => {
      try {
        const response = await CRUDService.getPost(id);
        getPost({ ...response });
      } catch (error) {
        console.log('Error', error);
      }
    };

    loadData(match.params.id);
  }, [match.params.id]);

  console.log(post, 'WOOOOOT1');

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
        });
      }
      delayTime(2000, () => history.push('/settings/crud'));
      actions.setSubmitting(false);
    } catch (error) {
      console.log(error, 'Error');

      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        body: post.body,
        title: post.title,
        userId: post.userId ? post.userId.toString() : [''],
      }}
      onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={CRUDSchema}
      render={formikBag => <PostForms {...formikBag} />}
    />
  );
};

CURDEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default CURDEdit;
