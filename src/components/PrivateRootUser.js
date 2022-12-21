import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRootUser = ({ dataLog }) => {
  return (
    <>
      {dataLog.role == null && dataLog ? (
        <Outlet />
      ) : (
        <Navigate to="/transaksilist" />
      )}
    </>
  );
};

export default PrivateRootUser;
