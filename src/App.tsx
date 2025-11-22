import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Contacts from "./pages/Contacts";
import Deals from "./pages/Deals";
import Task from "./pages/Task";
import Documents from "./pages/Documents";
import Projects from "./pages/Projects";
import Meeting from "./pages/Meeting";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary conta">
        <Header />
        <div className="navigation__container">
          <Navigation />
          <div className="text-white flex-4 page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/task" element={<Task />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/meeting" element={<Meeting />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
