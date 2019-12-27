import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './services/privateRoute';
import PublicRoute from './services/publicRoute';

import Login from './pages/Login';
import Search from './pages/Search';

export default function Routes() {
  return (
    <Switch>
      <PublicRoute restricted path="/login" component={Login} />
      <PrivateRoute path="/buscar" component={Search} />
      <Redirect to="/login" />
    </Switch>
  );
}
