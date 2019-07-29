/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Cascader as AntCascader } from 'antd';
import { Field } from 'formik';

import { FormItem } from './FormItem';
import { fieldDefaultProps } from './FieldProps';

export const Cascader = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntCascader
          value={value}
          onChange={val => setFieldValue(name, val)}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Cascader.propTypes = fieldDefaultProps;
