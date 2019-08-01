import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { actionLogout } from 'actions/authAction';

class Dashboard extends Component {
  state = {
    title: 'Dashboard page',
  };

  showConfirmModal = () => {
    const { userLogout } = this.props;
    Modal.confirm({
      title: 'Do you want to Logout?',
      onOk() {
        userLogout();
      },
      onCancel() {},
    });
  };

  render() {
    const { title } = this.state;

    return (
      <div>
        {title}
        <button type="button" onClick={this.showConfirmModal}>
          Logout
        </button>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

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
