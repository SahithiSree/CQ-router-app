import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorzeLogin } from "../Redux/action";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchEvent(authorzeLogin({ username, password }));
  };
  const isAuth = useSelector((state) => state.isAuth);
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            onChange={handleUsername}
            value={username}
            type="text"
            name="username"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            onChange={handlePassword}
            value={password}
            type="password"
            name="password"
          />
        </label>
        <br />
        <input type="submit" onClick={handleSubmit} value="Login" />
      </form>
    </div>
  );
};

export default Login;
