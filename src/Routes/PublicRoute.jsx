import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import PrivateRoutes from "./PrivateRoute";
const PublicRoutes = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRoutes />} />
    </Routes>
  );
};
export default PublicRoutes;
