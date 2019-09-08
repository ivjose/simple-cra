import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { actionLogout } from 'actions/authAction';
import TreeComponent from './TreeComponent';

const Dashboard = ({ userLogout }) => {
  const showConfirmModal = () => {
    Modal.confirm({
      title: 'Do you want to Logout?',
      onOk() {
        userLogout();
      },
      onCancel() {},
    });
  };
  return (
    <div>
      Dashboard
      <br />
      <button type="button" onClick={showConfirmModal}>
        Logout
      </button>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/crud">Crud</Link>
      <br />
      <TreeComponent />
    </div>
  );
};

Dashboard.propTypes = {
  userLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  userLogout: actionLogout,
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
