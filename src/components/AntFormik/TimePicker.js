/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { TimePicker as AntTimePicker } from 'antd';
import { Field } from 'formik';
import moment from 'moment';
import { fieldDefaultProps } from './FieldProps';
import { FormItem } from './FormItem';

export const TimePicker = ({ name, label, required, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntTimePicker
          value={value ? moment(value) : undefined}
          onChange={date => {
            setFieldValue(name, date ? date.toISOString() : null);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

TimePicker.propTypes = fieldDefaultProps;
