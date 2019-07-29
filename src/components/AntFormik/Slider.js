/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Slider as AntSlider } from 'antd';
import { Field } from 'formik';

import { fieldDefaultProps } from './FieldProps';
import { FormItem } from './FormItem';

export const Slider = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntSlider
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

Slider.propTypes = fieldDefaultProps;
