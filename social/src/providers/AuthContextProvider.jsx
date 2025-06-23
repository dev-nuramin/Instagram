

// initial auth context provider setup
import React, { useReducer } from "react";  
import AuthContext from "../context/AuthContext";

import { AuthReducer } from "../reducers/AuthReducer";
import { INITIAL_STATE } from "../context/InitialState";
//create AuthContextProvider component






const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider 
     value={{
      token: state.token,
      user: state.user,
      dispatch
     }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Export the AuthContextProvider component
export default AuthContextProvider;