import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Loader from 'components/Loader';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return auth.status ? (
          <div>
            <React.Suspense fallback={<Loader />}>
              <Component {...props} />
            </React.Suspense>
          </div>
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

export default withRouter(PrivateRoute);
