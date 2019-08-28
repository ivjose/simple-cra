import React from 'react';
import { Input, Form, ResetButton, SubmitButton } from 'components/AntFormik';
import ModalButton from 'components/Modal/ModalButton';

import UserSelect from './UserSelect';

const PostForms = () => {
  return (
    <Form>
      <Input
        name="title"
        label="Title"
        type="text"
        placeholder="Enter your Username"
      />
      <Input.TextArea
        name="body"
        label="Comments"
        placeholder="Enter your Comments"
      />
      <UserSelect />
      <SubmitButton disabled={false}>submit</SubmitButton>
      <ResetButton>Reset</ResetButton>
      <ModalButton path="teasdasd" />
    </Form>
  );
};

export default PostForms;
