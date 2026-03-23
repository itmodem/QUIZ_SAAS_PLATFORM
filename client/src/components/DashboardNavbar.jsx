import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md bg-white border-b">
      <h1 className="text-xl font-bold">Quiz SaaS Dashboard</h1>

      <button
        onClick={logout}
        className="px-4 py-1 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardNavbar;