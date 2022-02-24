import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

import { useDispatch } from "react-redux";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const checkToken = () => {
    return localStorage.getItem('token') || null
}
  useEffect(() => {
    const token = checkToken();
    if (!token) {
      return;
    } else {
     
      navigate("/dashboard");

    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
