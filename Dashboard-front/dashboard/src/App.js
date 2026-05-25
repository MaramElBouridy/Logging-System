import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ApplicationPage from "./pages/ApplicationPage";
import RegisterPage from "./pages/RegisterPage";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />   
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/applications/:name" element={<ApplicationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

