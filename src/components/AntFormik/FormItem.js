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
      const isTouched = get(touched, name, false);
      const hasError = error !== undefined && isTouched;
      const isValid = !error && isTouched;

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
