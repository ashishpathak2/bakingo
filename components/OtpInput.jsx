import React, { useState, useEffect, useRef } from "react";

const OtpInput = ({ otp, setOtp, isLoading }) => {
  const [time, setTime] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (isLoading || time <= 0) return; // Stop if loading or time reaches 0

    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0)); // Prevent negative values
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [time, isLoading]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to next input
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto p-4">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Enter OTP</h2>

      {/* OTP Input Form */}
      <div className="flex gap-3 justify-center w-full">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            autoFocus={index === 0}
            role="textbox"
            aria-label={`OTP digit ${index + 1}`}
            className="w-10 h-10 md:w-14 md:h-14 text-lg md:text-xl font-medium text-center border rounded-lg border-gray-500 focus:ring-2 focus:ring-red-500 outline-none transition-all duration-200"
            inputMode="numeric"
            pattern="\d*"
            required
          />
        ))}
      </div>

      {/* Submit Button */}
      <button
        disabled={!otp.every((digit) => digit !== "")}
        type="submit"
        className={`w-full p-3 mt-5 font-semibold text-white rounded-lg shadow-md transition-all duration-300 ${
          !otp.every((digit) => digit !== "")
            ? "bg-gray-400 cursor-not-allowed opacity-60"
            : "bg-red-600 hover:bg-red-700"
        }`}
      >
        Verify OTP
      </button>

      {/* Resend OTP Button */}
      <button
        type="button"
        disabled={time !== 0}
        className="mt-4 text-sm md:text-base text-gray-700 hover:underline transition-all"
      >
        {time !== 0 ? `Resend OTP in ${time}s` : "Resend OTP"}
      </button>
    </div>
  );
};

export default OtpInput;
