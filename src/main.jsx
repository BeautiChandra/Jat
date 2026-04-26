import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";
import FormContextProvider from "./Context/FormContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <FormContextProvider>
      <div className="min-h-screen bg-gray-200">
        <App />
      </div>
    </FormContextProvider>
  </UserContextProvider>
);
