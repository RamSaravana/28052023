import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

const InventoryManager = ({ authenticationStatus }) => {
  const Routes = () => useRoutes(routes(authenticationStatus));

  return (
    <>
      <Routes />
    </>
  );
};

export default InventoryManager;
