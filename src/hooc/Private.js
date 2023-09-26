import React from "react";
import Detail from "../pages/Detail";
import { Navigate } from "react-router";

const Private = ({ authenticate }) => {
  return authenticate == true ? <Detail /> : <Navigate to="/login" />;
};

export default Private;
