import React from "react";

const AuthButton = ({ onClick, isActive, activeIcon, defaultIcon, defaultLabel, activeLabel }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 text-black hover:bg-gray-700/25 bg-white font-medium px-4 py-2 rounded-lg shadow transition-all duration-300"
      aria-label={isActive ? activeLabel : defaultLabel}
    >
      <div className="relative w-6 h-6">
        {isActive ? (
          <div className="absolute inset-0 animate-fade-in">
            {React.createElement(activeIcon, { size: 22, fill: "red", color: "red", strokeWidth: 0 })}
          </div>
        ) : (
          <div className="absolute inset-0 animate-fade-in">
            {React.createElement(defaultIcon, { size: 22 })}
          </div>
        )}
      </div>
      <span className="animate-fade-in text-black">{isActive ? activeLabel : defaultLabel}</span>
    </button>
  );

export default AuthButton;