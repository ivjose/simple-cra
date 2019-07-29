import React, { Component } from 'react';
import { PageInternalError } from 'components/ErrorPages';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <PageInternalError />;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
