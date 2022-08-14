import React from "react";
import classes from "./UserLogin.module.css";
import Modal from "../../UI/Modal";
import UserForm from "./UserSignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";

const UserLogin = (props) => {
  const dispatch = useDispatch();

  const showUserSignUp = useSelector((state) => state.ui.userSignUpIsVisible);

  const signUpHandler = () => {
    dispatch(uiActions.userSignUpToggle());
  };

  const closeSignUpHandler = () => {
    dispatch(uiActions.userSignUpToggle());
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.input}>
        <label htmlFor="username">UserName:</label>
        <input type="text" id="username"></input>
        <label htmlFor="password">Password:</label>
        <input type="password"></input>
      </form>

      <div className={classes.actions}>
        {showUserSignUp && <UserForm onClose={closeSignUpHandler} />}
        <button onClick={signUpHandler} className={classes.button}>
          Sign Up
        </button>
        <button
          type="button"
          onClick={props.onClose}
        >
          Close
        </button>
        <button className={classes.button} type="submit">
          Login
        </button>
      </div>
    </Modal>
  );
};

export default UserLogin;
