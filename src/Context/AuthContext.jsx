import { createContext, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")).token : "",
  });

  const setUserDetails = (userDetails, token) => {
    setUser({
      ...userDetails,
      token,
    });
    window.sessionStorage.setItem("user", JSON.stringify({ ...userDetails, token }));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
