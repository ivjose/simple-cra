import React from 'react';

const initialRoutes = {
  admin: [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Profile',
      path: '/profile',
    },
    {
      name: 'Crud',
      path: '/crud',
    },
  ],
  staff: [
    {
      name: 'Staff 1',
      path: '/hello',
    },
    {
      name: 'Staff 2',
      path: '/hello3',
    },
  ],
};

const Routes = selected => {
  const [routes] = React.useState(initialRoutes);
  const [selectedRoutes, setSelectedRoutes] = React.useState([]);

  React.useEffect(() => {
    setSelectedRoutes(routes[selected]);
    // return () => {
    //   {cleanup}
    // };
  }, [selected, routes]);

  return selectedRoutes;
};

export default Routes;
