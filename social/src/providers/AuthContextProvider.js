
//create AuthContextProvider component

import AuthContext from "../context/AuthContext";

const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}