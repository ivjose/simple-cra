/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Button } from 'antd';
import { Field } from 'formik';

import { childrenProps } from './FieldProps';

export const ResetButton = ({ children, ...restProps }) => (
  <Field>
    {({ form: { resetForm, dirty } }) => (
      <Button
        onClick={() => resetForm()}
        disabled={!dirty}
        type="default"
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
);

ResetButton.propTypes = childrenProps;
