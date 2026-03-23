import React from "react";

const Button = ({ 
  children,     // Button text
  onClick,      // Click function
  type = "button",
  className = "" 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;