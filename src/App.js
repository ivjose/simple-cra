import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
/** Context API */

// shared components
import Loader from 'components/Loader';
// import PrivateRoute from 'containers/Private/PrivateRoute';
// import PublicRoute from 'containers/Public/PublicRoute';
import { Page404 } from 'components/ErrorPages';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from './ErrorBoundary';

// Private Routes or Authenticated Routes
const Dashboard = React.lazy(() => import('containers/Private/Dashboard'));
const Profile = React.lazy(() => import('containers/Private/Profile'));

// Routes can access in Public
const Login = React.lazy(() => import('containers/Public/Login'));
const AllForms = React.lazy(() => import('containers/Public/AllForms'));

class App extends Component {
  state = {
    title: 'test',
  };

  render() {
    const { title } = this.state;
    console.log(title);

    return (
      <>
        <GlobalStyle />
        <ErrorBoundary>
          <React.Suspense fallback={<Loader />}>
            <Switch>
              <Redirect exact from="/" to="/login" />

              <Route exact path="/login" component={Login} />
              <Route exact path="/all-forms" component={AllForms} />

              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />

              <Route exact path="/404" component={Page404} />
              <Route component={Page404} />
            </Switch>
          </React.Suspense>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
