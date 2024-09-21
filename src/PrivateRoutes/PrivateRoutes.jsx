import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);
   console.log("this Uthjdkdd", user)

  return user?.token ? <Outlet></Outlet> :<Navigate to="/login"></Navigate>
 
  
};

export default PrivateRoutes;
