import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import SampleForm from './components/SampleForm';

export const registrationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(4)
    .required('This field is required!'),
  password: Yup.string()
    .min(4)
    .required('This field is required!'),
  comments: Yup.string().required('This field is required!'),
  status: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
  fruits_select: Yup.array().of(
    Yup.string().required('This field is required!')
  ),
  country: Yup.array().of(Yup.string().required('This field is required!')),
  fruits_search: Yup.string().required('This field is required!'),
});

class AllForms extends Component {
  handleSubmit = async (values, action) => {
    action.setSubmitting(false);
  };

  render() {
    return (
      <div style={{ margin: '0 auto', padding: 10, width: '100%' }}>
        <Formik
          initialValues={{
            first_name: '',
            status: false,
            fruits_select: [''],
            password: '',
            comments: '',
            country: [''],
            fruits_search: [''],
            currency: null,
            my_place: 'Hangzhou',
            my_crush: 'Yiminghe',
            price: 50,
            price_range: [20, 50],
          }}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
          enableReinitialize={true}
          validationSchema={registrationSchema}
          render={formikBag => <SampleForm {...formikBag} />}
        />
      </div>
    );
  }
}

export default AllForms;
