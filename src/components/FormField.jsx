import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 "
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-s bg-[#000000] -ml-2 my-2 py-5 px-5 shadow-xl text-white hover:bg-white hover:text-black "
        >
          Generate Random Prompt
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block sm:w-full w-[350px] p-6 sm:m-0 "
      placeholder={placeholder}
      py-4
      px-4
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
