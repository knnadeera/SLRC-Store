import React from 'react'
import UserLogin from "./UserLogin";

const User = (props) => {
  return <UserLogin onClose={props.onClose} />;
};

export default User;
