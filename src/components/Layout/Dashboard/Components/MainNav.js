import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoutesHooks from 'hooks/RoutesHooks';

import Styled from '../styled';

// const { SubMenu } = Menu;

const MainNav = ({ match }) => {
  const routeList = RoutesHooks('admin');

  console.log(routeList, match, 'NICE ONE1');

  return (
    <Styled.MainNav
      onClick={() => {}}
      selectedKeys={[match.url]}
      mode="horizontal"
    >
      {routeList.length > 0 &&
        routeList.map(route => (
          <Menu.Item key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </Menu.Item>
        ))}

      {/* <Menu.Item key="app" disabled>
        <Icon type="appstore" />
        Navigation Two
      </Menu.Item>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            Navigation Three - Submenu
          </span>
        }
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu> */}
    </Styled.MainNav>
  );
};

MainNav.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default withRouter(MainNav);
