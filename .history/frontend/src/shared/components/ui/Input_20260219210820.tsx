import type { InputHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;   // optional label above input
  error?: string;   // optional error message
  className?: string; // optional extra className for customization
}

const Input: FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Optional label */}
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      )}

      {/* Input field */}
      <input
        {...props}
        className={clsx(
          "w-full border rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
      />

      {/* Optional error message */}
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default Input;
