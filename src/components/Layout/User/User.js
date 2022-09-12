import React from "react";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import UserForm from "./UserSignUpForm";
import classes from "./User.module.css";

const User = (props) => {
  return (
    <div className={classes.user}>
      <Link to="/admin/addnewpart">Add New Part</Link>
      <div >
        <UserLogin />
        <UserForm />
      </div>
    </div>
  );
};

export default User;
