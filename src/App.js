import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
/** Context API */

// shared components
import { actionAuthChecker } from 'actions/authAction';
import Loader from 'components/Loader';
import PrivateRoute from 'containers/Private/PrivateRoute';
import PublicRoute from 'containers/Public/PublicRoute';
import { Page404 } from 'components/ErrorPages';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from './ErrorBoundary';

// Private Routes or Authenticated Routes
const Dashboard = React.lazy(() => import('containers/Private/Dashboard'));
const Profile = React.lazy(() => import('containers/Private/Profile'));
const CRUD = React.lazy(() => import('containers/Private/CRUD'));

// Routes can access in Public
const Login = React.lazy(() => import('containers/Public/Login'));
const AllForms = React.lazy(() => import('containers/Public/AllForms'));

const App = ({ authChecker }) => {
  React.useEffect(() => {
    const loadToken = () => {
      authChecker();
    };

    loadToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary>
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Redirect exact from="/" to="/login" />

            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/all-forms" component={AllForms} />

            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/crud" component={CRUD} />

            <Route exact path="/404" component={Page404} />
            <Route component={Page404} />
          </Switch>
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
};

App.propTypes = {
  authChecker: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  authChecker: actionAuthChecker,
};

export default connect(
  null,
  mapDispatchToProps
)(App);
