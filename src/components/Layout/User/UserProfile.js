import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./UserProfile.module.css";

const UserProfile = (props) => {
  return (
    <Fragment>
      <div className={classes.user_profile}>
        <Card>
          <div className={classes.menu}>
            <NavLink to="/admin/addnewpart">Add New Part</NavLink>
            <p>My Orders</p>
            <p>Account Details</p>
            <p>Addresses</p>
            <button>Logout</button>
          </div>
        </Card>
        <div></div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
