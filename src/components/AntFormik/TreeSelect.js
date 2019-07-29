/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { TreeSelect as AntTreeSelect } from 'antd';
import { Field } from 'formik';
import { fieldDefaultProps } from './FieldProps';
import { FormItem } from './FormItem';

export const TreeSelect = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <FormItem name={name} required={required} label={label}>
        <AntTreeSelect
          value={value}
          onChange={val => setFieldValue(name, val.valueOf())}
          onBlur={() => setFieldTouched(name)}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

TreeSelect.propTypes = fieldDefaultProps;

TreeSelect.TreeNode = AntTreeSelect.TreeNode;
