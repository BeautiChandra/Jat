import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";
import { FormProvider } from "./Context/FormContext";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <FormProvider>
      <div className="min-h-screen bg-gray-200">
        <App />
      </div>
    </FormProvider>
  </UserContextProvider>
);
