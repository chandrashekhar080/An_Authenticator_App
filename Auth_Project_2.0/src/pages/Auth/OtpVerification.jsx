import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length === 6) {
      toast.info(`OTP Verified: ${fullOtp}`);
      // TODO: Navigate to email verification page
    } else {
      toast.info("Please enter a valid 6-digit OTP");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">OTP Verification</h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter the 6-digit OTP sent to your number
        </p>

        <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              className="w-10 h-10 text-center border border-gray-400 rounded focus:outline-blue-400 text-lg"
            />
          ))}
        </form>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Verify OTP
        </button>
      </div>
      <a href="/verify-email">Verify OTP</a>
    </div>
  );
};

export default OtpVerification;
