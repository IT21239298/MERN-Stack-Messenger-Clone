import React from "react";

const Input = ({
  label = "",
  name = "",
  type = "text",
  className = "",
  isRequired = false,
  placeholder = "",
}) => {
  return (
    <div>
      <label
        for={name}
        className="block mb-2 text-sm font-medium text-gray-800"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full px-16 py-2.5
            dark:focus:border-blue-500 ${className}`}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
};
export default Input;
