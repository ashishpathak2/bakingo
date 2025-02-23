import React from "react";

const Loader = ({ isLoading, message, className }) => {
  if (!isLoading) return null;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div 
        className="w-10 h-10 border-2 border-t-transparent border-r-black border-b-black border-l-black rounded-full animate-spin  duration-500"
        role="alert"
        aria-live="assertive"
      />
    </div>
  );
};

export default Loader;
