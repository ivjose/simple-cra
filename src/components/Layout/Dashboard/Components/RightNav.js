import React from 'react';
import { useDispatch } from 'react-redux';
import { Icon, Dropdown, Menu, Tooltip, Modal, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import CONSTANTS from 'utils/constants';
import Styled from '../styled';

const { LOGOUT } = CONSTANTS.TYPES;

const RightNav = () => {
  // const { logoutUser } = React.useContext(authContext);
  const dispatch = useDispatch();
  const showConfirm = () => {
    Modal.confirm({
      title: 'Do you want to Logout?',
      onOk() {
        dispatch({ type: LOGOUT });
      },
      onCancel() {},
    });
  };

  return (
    <Styled.RightNav>
      <Styled.RightLink to="dashboard">
        <Icon type="bell" />
      </Styled.RightLink>
      <Tooltip placement="bottom" title="FAQ">
        <Styled.RightAction>
          <Icon type="exclamation-circle" />
        </Styled.RightAction>
      </Tooltip>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="1">
              <Link to="/profile">
                <Icon type="user" style={{ minWidth: 12, marginRight: 8 }} />
                My Profile
              </Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={showConfirm}>
              <Icon type="logout" />
              Log Out
            </Menu.Item>
          </Menu>
        }
        placement="bottomRight"
      >
        <Styled.RightAction>
          <Avatar
            style={{ backgroundColor: 'gray', verticalAlign: 'middle' }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <span
            style={{
              marginLeft: 8,
            }}
          >
            <b>Hi!</b>
            John Doe
          </span>
        </Styled.RightAction>
      </Dropdown>
    </Styled.RightNav>
  );
};

export default RightNav;
