import React, { useState } from "react";
import UserLogin from "./UserLogin";
import UserSignUpForm from "./UserSignUpForm";
import classes from "./User.module.css";
// import UserProfile from "./UserProfile";

const User = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className={classes.user}>
      {/* <UserProfile /> */}
      <div>
        {isLogin && <UserLogin onSignUp={switchAuthModeHandler} />}
        {!isLogin && <UserSignUpForm onLogin={switchAuthModeHandler} />}
      </div>
    </div>
  );
};

export default User;
