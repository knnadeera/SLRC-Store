import { useState } from "react";
import classes from "./UserLogin.module.css";
import Modal from "../../UI/Modal";
import UserForm from "./UserSignUpForm";

const UserLogin = (props) => {
  const [signUpForm, setSignUpForm] = useState(false);

  const signUpHandler = () => {
    setSignUpForm(true);
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
          {signUpForm && <UserForm onClose={props.onClose} />}
          <button onClick={signUpHandler} className={classes.button}>
            Sign Up
          </button>
        <button
          type="button"
          className={classes["button--alt"]}
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
