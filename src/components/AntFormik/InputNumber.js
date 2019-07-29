/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { InputNumber as AntInputNumber } from 'antd';
import { Field } from 'formik';
import { fieldDefaultProps } from './FieldProps';
import { FormItem } from './FormItem';

export const InputNumber = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value, onBlur }, form: { setFieldValue } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntInputNumber
          name={name}
          value={value}
          onChange={val => setFieldValue(name, val)}
          onBlur={onBlur}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

InputNumber.propTypes = fieldDefaultProps;
