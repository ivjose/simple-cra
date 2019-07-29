/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { AutoComplete as AntAutoComplete } from 'antd';
import { Field } from 'formik';

import { FormItem } from './FormItem';
import { fieldDefaultProps } from './FieldProps';

export const AutoComplete = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntAutoComplete
          value={value}
          onChange={val => setFieldValue(name, val.valueOf())}
          onBlur={() => setFieldTouched(name)}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

AutoComplete.propTypes = fieldDefaultProps;
