import React from 'react';
import { Modal as AntModal, Button } from 'antd';
import PropTypes from 'prop-types';

const Modal = ({ text, path, btnText }) => {
  const [visible, setVisible] = React.useState(false);
  console.log(path);

  return (
    <>
      <AntModal
        visible={visible}
        title="Title"
        onOk={() => setVisible(!visible)}
        onCancel={() => setVisible(!visible)}
        footer={[
          <Button key="back" onClick={() => setVisible(!visible)}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => setVisible(!visible)}
          >
            Submit
          </Button>,
        ]}
      >
        {text}
      </AntModal>
      <Button onClick={() => setVisible(!visible)}>{btnText}</Button>
    </>
  );
};

Modal.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string.isRequired,
  btnText: PropTypes.string,
};

Modal.defaultProps = {
  text: 'test',
  btnText: 'click me',
};

const ModalButton = React.memo(Modal);

export default ModalButton;
