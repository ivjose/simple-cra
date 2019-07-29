/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Input as AntInput } from 'antd';
import { Field } from 'formik';

import { FormItem } from './FormItem';
import { fieldDefaultProps } from './FieldProps';

export const Input = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value, onChange, onBlur } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntInput
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Input.propTypes = fieldDefaultProps;

Input.defaultProps = {
  required: false,
  label: 'false',
};

Input.Password = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value, onChange, onBlur } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntInput.Password
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Input.Password.propTypes = fieldDefaultProps;

Input.Password.defaultProps = {
  required: false,
  label: 'false',
};

Input.TextArea = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value, onChange, onBlur } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntInput.TextArea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Input.TextArea.propTypes = fieldDefaultProps;

Input.TextArea.defaultProps = {
  required: false,
  label: 'false',
};
