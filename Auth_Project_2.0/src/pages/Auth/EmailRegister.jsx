import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EmailRegister = () => {
  const navigate = useNavigate();

  const handleSendLink = (e) => {
    e.preventDefault();
    toast.info("Verification link sent to your email!");
    setTimeout(() => navigate("/register"), 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6">Verify Your Email</h2>
      <form onSubmit={handleSendLink} className="space-y-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Verification Link
        </button>
      </form>
    </div>
  );
};

export default EmailRegister;
