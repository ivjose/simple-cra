/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import { Field } from 'formik';
import moment from 'moment';

import { FormItem } from './FormItem';
import { fieldDefaultProps } from './FieldProps';

const {
  MonthPicker: AntMonthPicker,
  RangePicker: AntRangePicker,
  WeekPicker: AntWeekPicker,
} = AntDatePicker;

export const DatePicker = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntDatePicker
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

DatePicker.propTypes = fieldDefaultProps;

DatePicker.MonthPicker = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntMonthPicker
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

DatePicker.MonthPicker.propTypes = fieldDefaultProps;

DatePicker.RangePicker = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntRangePicker
          name={name}
          value={value}
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

DatePicker.RangePicker.propTypes = fieldDefaultProps;

DatePicker.WeekPicker = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntWeekPicker
          name={name}
          value={value}
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

DatePicker.WeekPicker.propTypes = fieldDefaultProps;
