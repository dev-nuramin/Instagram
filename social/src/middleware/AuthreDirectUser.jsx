import {  useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, } from "react-router-dom";

export const AuthreDirectUser = ({children}) => {

    const {token } = useContext(AuthContext);

    return token ? <Navigate to="/" replace={true} /> : children;

}