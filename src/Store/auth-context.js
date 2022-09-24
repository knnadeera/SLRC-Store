import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  localId: "",
  isLoggedIn: false,
  login: (token, localId) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [localId, setLocalId] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, localId) => {
    setToken(token);
    setLocalId(localId);
    localStorage.setItem("token", token);
    localStorage.setItem("localId", localId);
  };

  const logoutHandler = () => {
    setToken(null);
    setLocalId(null);
    localStorage.clear();
  };

  const contextValue = {
    token: token,
    localId: localId,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
