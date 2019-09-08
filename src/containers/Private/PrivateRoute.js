import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dashboard } from 'components/Layout';
import Loader from 'components/Loader';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn ? (
          <Dashboard>
            <React.Suspense fallback={<Loader />}>
              <Component {...props} />
            </React.Suspense>
          </Dashboard>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location.pathname },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.defaultProps = {
  location: {
    pathname: '',
  },
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const mapStateToProps = ({ auth }) => {
  return {
    loggedIn: auth.loggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
