import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Breadcrumb, Row, Col } from 'antd';
import Styled from './styled';

import MainNav from './Components/MainNav';
import RightNav from './Components/RightNav';

const { Content, Footer } = Layout;

const Dashboard = ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Styled.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row>
          <Col span={18}>
            <MainNav />
          </Col>
          <Col span={6}>
            <RightNav />
          </Col>
        </Row>
      </Styled.Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Dashboard;
