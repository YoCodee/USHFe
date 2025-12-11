import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "w-full px-4 py-3 rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-rent-orange hover:bg-orange-500 text-white focus:ring-rent-orange shadow-md",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
    ghost: "bg-transparent text-rent-orange hover:text-orange-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
