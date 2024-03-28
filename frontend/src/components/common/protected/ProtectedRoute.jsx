import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Element, loggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      element={loggedIn ? <Element /> : <Navigate to="/login" replace />}
    />
  );
}

export default ProtectedRoute;
