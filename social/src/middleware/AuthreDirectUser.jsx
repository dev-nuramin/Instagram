import {  useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, } from "react-router-dom";

export const AuthreDirectUser = ({children}) => {

    const {isUserLogin } = useContext(AuthContext);

    return isUserLogin ? <Navigate to="/" replace={true} /> : children;

}