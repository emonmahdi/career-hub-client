import React from "react";
import { AuthContext } from "./AuthContext";

const userInfo = {
  email: "emon@gmail.com",
};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
