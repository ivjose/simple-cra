/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Field } from 'formik';
import { Form } from 'antd';

import { loadDash } from 'utils/helpers';
import { formItemProps } from './FieldProps';

const { get } = loadDash;

export const FormItem = ({
  name,
  hasFeedback,
  showValidateSuccess,
  children,
  ...restProps
}) => (
  <Field name={name}>
    {({ form: { errors = {}, touched = {} } }) => {
      const error = get(errors, name, undefined);
      const isTouched = get(touched, name, undefined);
      const hasError = error !== false && isTouched;
      const isValid = !error && isTouched;
      console.log('test Value', isTouched, hasError, isValid, error, errors);

      console.log(
        'test Error',
        hasError
          ? 'error'
          : isValid && showValidateSuccess
          ? 'success'
          : undefined
      );
      return (
        <Form.Item
          validateStatus={
            hasError
              ? 'error'
              : isValid && showValidateSuccess
              ? 'success'
              : undefined
          }
          hasFeedback={hasFeedback && isValid}
          help={(hasError && error) || (isValid && '')}
          {...restProps}
        >
          {children}
        </Form.Item>
      );
    }}
  </Field>
);

FormItem.propTypes = formItemProps;

FormItem.defaultProps = {
  hasFeedback: false,
  showValidateSuccess: false,
};
