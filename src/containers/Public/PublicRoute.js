import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Login } from 'components/Layout';
import Loader from 'components/Loader';

const PublicRoute = ({ component: Component, location, loggedIn, ...rest }) => {
  const { from } = location.state || { from: { pathname: '/dashboard' } };

  return (
    <Route
      {...rest}
      render={routeProps => {
        return loggedIn ? (
          <Redirect to={from} />
        ) : (
          <Login>
            <React.Suspense fallback={<Loader />}>
              <Component {...routeProps} />
            </React.Suspense>
          </Login>
        );
      }}
    />
  );
};

PublicRoute.defaultProps = {
  location: {
    state: {},
  },
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};

const mapStateToProps = ({ auth }) => {
  return {
    loggedIn: auth.loggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(PublicRoute));
