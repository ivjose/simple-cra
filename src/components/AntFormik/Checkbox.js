/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import { Field } from 'formik';

import { FormItem } from './FormItem';
import { fieldDefaultProps } from './FieldProps';

export const Checkbox = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntCheckbox
          name={name}
          checked={value}
          onChange={val => {
            setFieldValue(name, val.target.checked);
            setFieldTouched(name, val && true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Checkbox.propTypes = fieldDefaultProps;

Checkbox.Group = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntCheckbox.Group
          value={value}
          onChange={val => {
            setFieldValue(name, val.length === 0 ? [''] : val);
            setFieldTouched(name, val && true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Checkbox.Group.propTypes = fieldDefaultProps;
