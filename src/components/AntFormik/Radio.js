/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Radio as AntRadio } from 'antd';
import { Field } from 'formik';
import { fieldDefaultProps } from './FieldProps';
import { FormItem } from './FormItem';

export const Radio = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntRadio
          value={value}
          onChange={val => {
            setFieldValue(name, val.target.value);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Radio.propTypes = fieldDefaultProps;

Radio.Group = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntRadio.Group
          value={value}
          onChange={val => {
            setFieldValue(name, val.target.value);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Radio.Group.propTypes = fieldDefaultProps;

Radio.Button = AntRadio.Button;
