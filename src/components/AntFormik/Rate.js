/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Rate as AntRate } from 'antd';
import { Field } from 'formik';

import { FormItem } from './FormItem';
import { fieldDefaultProps } from './FieldProps';

export const Rate = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntRate
          value={value}
          onChange={val => {
            setFieldValue(name, val.valueOf());
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Rate.propTypes = fieldDefaultProps;
