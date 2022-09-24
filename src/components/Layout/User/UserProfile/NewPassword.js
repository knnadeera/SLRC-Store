import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../../Store/auth-context";
import classes from "./NewPassword.module.css";

const NewPassword = (props) => {
  const newPasswordInputRef = useRef();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAaISA5Vy4eneIF0K23yVeOnn9_m95dMfQ",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.ok) {
        alert("Password changed successfully");
      }
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="new-password">New Password</label>
      <input type="password" id="new-password" ref={newPasswordInputRef} />
      <button>Change Password</button>
    </form>
  );
};

export default NewPassword;
