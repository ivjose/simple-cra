/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Transfer as AntTransfer } from 'antd';
import { Field } from 'formik';
import { fieldDefaultProps } from './FieldProps';

import { FormItem } from './FormItem';

export const Transfer = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntTransfer
          targetKeys={value || []}
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

Transfer.propTypes = fieldDefaultProps;
