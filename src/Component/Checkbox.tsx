import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="appearance-none h-[18px] w-[18px] rounded border border-[#717171] checked:bg-[#2EAB8D] checked:border-transparent focus:outline-none"
        checked={checked}
        onChange={onChange}
      />
      <span className="text-gray-700">{label}</span>
      {checked && (
        <svg
          className="w-5 h-5 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </label>
  );
};

export default Checkbox;
