import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const sessionRegister = localStorage.getItem('session-register');
  const sessionRequest = localStorage.getItem('session-request');

  return (
    <Route
      {...rest}
      render={props =>
        sessionRegister && sessionRequest && restricted ? (
          <Redirect to="/buscar" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
