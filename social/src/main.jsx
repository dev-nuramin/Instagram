import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./providers/AuthContextProvider";
import LoaderContextProvider from "./providers/LoaderContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the App component with AuthContextProvider to provide auth context */}
    <AuthContextProvider>
      <LoaderContextProvider>
        <App />
      </LoaderContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
