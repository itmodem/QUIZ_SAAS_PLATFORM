import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Upload Image", path: "/dashboard/upload" },
    { name: "Generate MCQ", path: "/dashboard/generate" },
    { name: "PDF Preview", path: "/dashboard/pdf" },
    { name: "History", path: "/dashboard/history" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div
      className={`${
        open ? "w-56" : "w-16"
      } bg-gray-800 text-white min-h-screen p-3 transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        className="mb-4 p-2 bg-gray-700 rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? "<<" : ">>"}
      </button>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`p-2 rounded ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-gray-700"
            }`}
          >
            {open ? item.name : item.name.charAt(0)}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
