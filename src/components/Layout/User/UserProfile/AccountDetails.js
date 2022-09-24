import React from "react";
import classes from "./AccountDetails.module.css";

const AccountDetails = (props) => {
  return (
    <div className={classes.details}>
      <section>
        <label>User Name:</label>
        <p>{props.userName}</p>
      </section>
      <section>
        <label>Email:</label>
        <p>{props.email}</p>
      </section>
      <section>
        <label>Mobile Number:</label>
        <p>{props.mobile}</p>
      </section>
      <section>
        <label>Address:</label>
        <p>
          {props.address}
          <br/>{props.city}
          <br/>{props.postalCode}
          <br/>{props.country}
        </p>
      </section>
    </div>
  );
};

export default AccountDetails;
