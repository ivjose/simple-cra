import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Page404 } from 'components/ErrorPages';

import CURDList from './CRUDList';
import CURDAdd from './CRUDAdd';
import CURDEdit from './CURDEdit';
import CURDView from './CRUDView';

const CRUD = ({ match }) => {
  console.log(match.path);

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={CURDList} />
      <Route exact path={`${match.path}/add`} component={CURDAdd} />
      <Route exact path={`${match.path}/view/:id`} component={CURDView} />
      <Route exact path={`${match.path}/edit/:id`} component={CURDEdit} />
      <Page404 />
    </Switch>
  );
};

CRUD.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default CRUD;
