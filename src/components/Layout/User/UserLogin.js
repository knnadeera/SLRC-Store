import React, { useContext,  useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../Store/auth-context";
import classes from "./UserLogin.module.css";

const UserLogin = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAaISA5Vy4eneIF0K23yVeOnn9_m95dMfQ",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed...!";

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken, data.localId);
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });    
      
  };

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <form className={classes.input}>
        <label htmlFor="login_username">UserName:</label>
        <input type="text" id="login_username" ref={emailInputRef} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="login_password" ref={passwordInputRef} />
      </form>
      <div className={classes.actions}>
        <button
          className={classes.button}
          type="submit"
          onClick={submitHandler}
        >
          Login
        </button>
      </div>
      <p onClick={props.onSignUp}>
        New Customers.
        <br />
        Create an Account...!
      </p>
    </div>
  );
};

export default UserLogin;
