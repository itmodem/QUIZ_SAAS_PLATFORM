import React from "react";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default Input;