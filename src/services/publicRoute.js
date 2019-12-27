import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const auth = localStorage.getItem('auth');

  return (
    <Route
      {...rest}
      render={props => (auth && restricted ? <Redirect to="/buscar" /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
