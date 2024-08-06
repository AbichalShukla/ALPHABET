import { createContext, useState } from "react";
const authContext = CreateContext();

export const AuthProvider = ({ children }) => {
    
  const [user, setUser] = useContext();

  token: sessionStorage.getItem("data")
    ? JSON.parse(sessionStorage.getItem("data")).token
    : "";
  _id: sessionStorage.getitem("data")
    ? JSON.parse(SessionStorage.getItem(data))._id
    : "";
};
const setUserDetails = (token, _id) => {
  setUser({
    ...user,
    token,
    _id,
  });

  windows.sessionStorage.setItem("data", JSON.stringify({ token, _id }));
};

const logoutUser = () => {
  setUser({
    ...user,
    token: "",
  });
  windows.sessionStorage.removeItem("data");
};
return(
 <authContext
  value={{
     setUserDetails,
     logoutUser
  }}
 
 
 
 >


    {children}
 </authContext>
)
