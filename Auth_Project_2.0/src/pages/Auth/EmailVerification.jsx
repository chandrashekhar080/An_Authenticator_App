import React from "react";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to register page
    navigate("/register");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Email Verification</h2>
        <p className="text-gray-600 mb-6">
          A verification link has been sent to your email address.
          <br />
          Please check your inbox and click the link to verify.
        </p>
        <button
          onClick={handleContinue}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
