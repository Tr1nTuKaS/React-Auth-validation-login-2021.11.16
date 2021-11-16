import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = React.createContext({
  login: () => {},
  logout: () => {},
  userName: "",
  token: "",
});

AuthContext.displayName = "AuthContext";

function AuthProvider({ children }) {
  const localStorageEmail = localStorage.getItem("userEmail");
  const localStorageToken = localStorage.getItem("userToken");
  const [userName, setUserName] = useState(localStorageEmail);
  const [token, setToken] = useState(localStorageToken);

  const login = (email, token) => {
    console.log("file: AuthContext.js variable: login:");
    setUserName(email);
    setToken(token);
    toast.success(email + " logged in");
  };

  const logout = () => {
    console.log("file: AuthContext.js variable: Logout:", userName);
    setUserName("");
    setToken(null);
    toast.error("you are logout");
  };
  useEffect(() => {
    console.log("file: AuthContext.js variable: UseEffect token:", token);
    localStorage.setItem("userEmail", userName);
    localStorage.setItem("userToken", token);
  }, [userName, token]);

  const authCtx = {
    login,
    logout,
    userName,
    token,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
