import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";

// Public Page
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

// Auth Page
import Login from "../pages/Login";
import Signup from "../pages/Signup";

// Dashboard Page
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import History from "../pages/History";
import Settings from "../pages/Settings";
import PDF from "../pages/PDF";
import Generate from "../pages/Generate";

import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Page */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Auth Page */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/*Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="upload" element={<Upload />} />
        <Route path="history" element={<History />} />
        <Route path="settings" element={<Settings />} />
        <Route path="pdf" element={<PDF/>} />
        <Route path="generate" element={<Generate/>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
