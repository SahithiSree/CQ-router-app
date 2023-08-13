import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "./actionTypes";
import axios from "axios";

export const userLoginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};
export const userLoginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};
export const userLoginSuccess = (payload) => (dispatch) => {
  dispatch(userLoginRequest());
  axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      dispatch(userLoginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(userLoginFailure(err));
    });
};
