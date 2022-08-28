import React, { useMemo} from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "../../modules/menu/menu";
import { Path } from "paths";
import Inbound from "../../modules/inventory/inbound";
import Outbound from "../../modules/inventory/outbound";

const AuthorizedPage = () => {
  
  const renders = useMemo(() => {
    return {
      [Path.SLASH]: {
        exact: true,
        element: <Menu />,
      },
      [Path.INBOUND]: {
        exact: true,
        element: <Inbound />,
      },
      [Path.OUTBOUND]: {
        exact: true,
        element: <Outbound />,
      },
    };
  }, []);

  const routeNames = useMemo(() => {
    return Object.keys(renders);
  }, [renders]);

  const routes = useMemo(() => {
    return routeNames.map((r, key) => {
      return <Route {...renders[r]} path={r} key={key} />;
    });
  }, [routeNames, renders]);

  return (
      <Routes>
        {routes}
      </Routes>
    )
};

export default AuthorizedPage;
