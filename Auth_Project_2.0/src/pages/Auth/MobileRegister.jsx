import React, { useState } from "react";
import { toast } from "react-toastify";
const countries = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  // Add more if needed
];

const MobileRegister = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info(
      `OTP sent to ${selectedCountry.code} ${mobileNumber} (${selectedCountry.name})`
    );
    // TODO: Navigate to OTP verification page
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Enter Mobile Number
        </h2>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          {/* Left: Country Dropdown */}
          <div className="w-1/2">
            <select
              value={selectedCountry.code}
              onChange={(e) => {
                const country = countries.find(
                  (c) => c.code === e.target.value
                );
                setSelectedCountry(country);
              }}
              className="w-full p-2 border rounded"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.name} ({country.code})
                </option>
              ))}
            </select>
          </div>

          {/* Right: Mobile Number */}
          <div className="w-1/2">
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </form>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Generate OTP
        
        </button>
        <a href="/verify-otp">
          Generate OTP
        </a>
      </div>
    </div>
  );
};

export default MobileRegister;
