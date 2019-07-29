import * as React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        #root {
          height: 100%;
        }
        .ant-form-item-label {
          > label {
            &::after {
              content: '' !important;
            }
          }
        }
      `}
    />
  );
};

export default GlobalStyle;
