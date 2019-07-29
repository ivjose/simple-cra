/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Select as AntSelect } from 'antd';
import { Field } from 'formik';
import { fieldDefaultProps } from './FieldProps';

import { FormItem } from './FormItem';

export const Select = ({ name, required, label, children, ...restProps }) => {
  return (
    <Field name={name}>
      {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
        <FormItem name={name} required={required} label={label}>
          <AntSelect
            onChange={val => setFieldValue(name, val)}
            onBlur={() => setFieldTouched(name)}
            value={value}
            {...restProps}
          >
            {children}
          </AntSelect>
        </FormItem>
      )}
    </Field>
  );
};

Select.propTypes = fieldDefaultProps;

Select.renderOptions = options =>
  options.map(({ label, ...restProps }, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <AntSelect.Option key={`select-option-Ant${index}`} {...restProps}>
      {label}
    </AntSelect.Option>
  ));

Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;
