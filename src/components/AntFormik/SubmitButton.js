/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Button } from 'antd';
import { Field } from 'formik';

import { childrenProps } from './FieldProps';

export const SubmitButton = ({ children, ...restProps }) => (
  <Field>
    {({ form: { isSubmitting, isValid } }) => (
      <Button
        loading={isSubmitting}
        disabled={!isValid || isSubmitting}
        type="primary"
        htmlType="submit"
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
);

SubmitButton.propTypes = childrenProps;
