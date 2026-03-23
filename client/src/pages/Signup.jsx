import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-80 p-4 shadow-md border rounded">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input type="text" placeholder="Name" className="w-full border p-2 mb-2 rounded" />

        <input type="email" placeholder="Email" className="w-full border p-2 mb-2 rounded" />

        <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded" />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;