import React from "react";
import { Route, Navigate } from "react-router-dom";
import { Path } from "../paths";

const AuthRoute = ({ element: Component, ...props }) => {
  return (
    <Route
      {...props}
      element={localStorage.getItem("accessToken") ? (
        <Navigate to={`${Path.SLASH}`} />
      ) : (
        <Component />
      )
    }
    />
  );
};

export default AuthRoute;
