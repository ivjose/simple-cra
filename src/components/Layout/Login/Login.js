import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Styled from './styled';

const { Header, Footer, Content } = Layout;

const Login = ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header>Header</Header>
      <Content>
        <Styled.Wrapper>{children}</Styled.Wrapper>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
Login.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Login;
