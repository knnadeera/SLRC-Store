import React, { useContext, useState } from "react";
import UserLogin from "./UserLogin";
import UserSignUpForm from "./UserSignUpForm";
import classes from "./User.module.css";
import UserProfile from "./UserProfile";
import AuthContext from "../../../Store/auth-context";

const User = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className={classes.user}>
      {isLoggedIn && <UserProfile />}
      {!isLoggedIn && (
        <div>
          {isLogin && <UserLogin onSignUp={switchAuthModeHandler} />}
          {!isLogin && <UserSignUpForm onLogin={switchAuthModeHandler} />}
        </div>
      )}
    </div>
  );
};

export default User;
