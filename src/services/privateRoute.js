import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const sessionRegister = localStorage.getItem('session-register');
  const sessionRequest = localStorage.getItem('session-request');

  return (
    <Route
      {...rest}
      render={props =>
        sessionRegister && sessionRequest ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
