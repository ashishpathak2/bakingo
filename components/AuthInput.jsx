// Authentication Input Component
import React from "react";

const AuthInput = ({ icon, placeholder, type, setFormData, formData, setError }) => {
    const validateNumericInput = (value) => {
        if (type === "tel") {
            return value.replace(/\D/g, ""); // Remove non-numeric characters
        }
        return value;
    };

    const handleChange = (e) => {
        const sanitizedValue = validateNumericInput(e.target.value);
        
        if (type === "tel" && sanitizedValue.length !== 10) {
            setError("Invalid Phone Number");
        } else {
            setError("");
        }
        
        setFormData(sanitizedValue);
    };

    return (
        <div className="flex  items-center gap-3 p-1 sm:p-2 border rounded-lg shadow-sm transition-all duration-300 animate-fade-in">
            {React.createElement(icon, { size: 22 })}
            <input
                maxLength={type === "tel" ? 10 : 100}
                onChange={handleChange}
                type={type}
                placeholder={placeholder}
                value={formData} // Ensure controlled input
                className={`w-full text-black ${type === "tel" ? "tracking-[0.3rem]" : "tracking-widest"} placeholder:tracking-wide  placeholder-gray-500 placeholder:text-base placeholder:font-normal text-lg font-semibold focus:outline-none bg-transparent transition-all duration-300`}
                required
            />
        </div>
    );
};

export default AuthInput;
