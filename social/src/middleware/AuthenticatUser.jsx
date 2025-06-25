import {  useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, } from "react-router-dom";

export const AuthenticateUser = ({children}) => {

    const {isUserLogin } = useContext(AuthContext);

    return isUserLogin ? children : <Navigate to="/login" replace={true} />;
}