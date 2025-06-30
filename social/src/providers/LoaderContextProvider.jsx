

// initial auth context provider setup
import React, { useReducer } from "react";  



import { INITIAL_STATE } from "../context/LoaderState";
import LoaderContext from "../context/LoaderContext";
import { LoaderReducer } from "../reducers/LoaderReducer";
//create AuthContextProvider component






const LoaderContextProvider = ({ children }) => {
  const [loaderState, loaderDispatch] = useReducer(LoaderReducer, INITIAL_STATE);

  return (
    <LoaderContext.Provider
      value={{
        loaderState,
        loaderDispatch
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

// Export the AuthContextProvider component
export default LoaderContextProvider;