import React from "react";

const Button = ({
  label = "Button",
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`text-white bg-primary hover:bg-primary focus:ring-4 focus-:outline-none 
    focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${className} `}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Button;
