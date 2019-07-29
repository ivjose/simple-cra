import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import Loader from 'components/Loader';

const PublicRoute = ({ component: Component, location, auth, ...rest }) => {
  const { from } = location.state || { from: { pathname: '/dashboard' } };

  return (
    <Route
      {...rest}
      render={routeProps => {
        return auth.status ? (
          <Redirect to={from} />
        ) : (
          <div>
            <React.Suspense fallback={<Loader />}>
              <Component {...routeProps} />
            </React.Suspense>
          </div>
        );
      }}
    />
  );
};

export default withRouter(PublicRoute);
