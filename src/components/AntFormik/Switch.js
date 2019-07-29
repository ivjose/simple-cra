/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Switch as AntSwitch } from 'antd';
import { Field } from 'formik';
import { fieldDefaultProps } from './FieldProps';
import { FormItem } from './FormItem';

export const Switch = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntSwitch
          checked={value}
          onChange={val => {
            setFieldValue(name, val);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Switch.propTypes = fieldDefaultProps;
