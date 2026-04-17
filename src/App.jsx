import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import { User } from "lucide-react";
import DashBoard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import { useContext } from "react";
import UserContext from "./Context/UserContext";

function App() {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={user ? <DashBoard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
