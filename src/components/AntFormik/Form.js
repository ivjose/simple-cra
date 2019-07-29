/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Field } from 'formik';
import { Form as AntdForm } from 'antd';

export const Form = props => {
  return (
    <Field>
      {({ form: { handleReset, handleSubmit } }) => (
        <AntdForm onReset={handleReset} onSubmit={handleSubmit} {...props} />
      )}
    </Field>
  );
};
