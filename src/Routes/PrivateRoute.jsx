import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import Login from "../Components/Login";
import { connect } from "react-redux";
import { render } from "react-dom";
import Home from "../Components/Home";
import PublicRoutes from "./PublicRoute";

const PrivateRoutes = (props) => {
  const isAuth = this.props;
  if (!isAuth) {
    alert("Login!");
    return <Redirect to="/" />;
  } else {
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    );
  }
};
const mapStateToProps = (state) => ({
  isAuth: state.isAuth,
});

export default connect(mapStateToProps, null)(PublicRoutes);
