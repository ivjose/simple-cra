import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Styled = {
  Header: styled(Header)`
    height: 64px;
    background: #fff;
  `,
  MainNav: styled(Menu)`
    border-bottom: none;
    line-height: 62px;
  `,
  RightNav: styled.div`
    height: 100%;
    overflow: hidden;
    padding-right: 20px;
    text-align: right;
  `,
  RightAction: styled.span`
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  `,
  RightLink: styled(Link)`
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    color: inherit;
    &:hover {
      color: inherit;
      background: rgba(0, 0, 0, 0.025);
    }
  `,
};

export default Styled;
