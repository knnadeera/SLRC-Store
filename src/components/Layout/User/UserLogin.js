import React from "react";
import classes from "./UserLogin.module.css";

const UserLogin = (props) => {
  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <form className={classes.input}>
        <label htmlFor="login_username">UserName:</label>
        <input type="text" id="login_username"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" id="login_password"></input>
      </form>
      <div className={classes.actions}>
        <button className={classes.button} type="submit">
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
