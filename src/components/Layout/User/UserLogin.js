import React, { useRef } from "react";
import classes from "./UserLogin.module.css";

const UserLogin = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaISA5Vy4eneIF0K23yVeOnn9_m95dMfQ",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  return (
    <form className={classes.login} onSubmit={submitHandler}>
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
      <p onClick={props.onSignUp}>
        New Customers.
        <br />
        Create an Account...!
      </p>
    </form>
  );
};

export default UserLogin;
