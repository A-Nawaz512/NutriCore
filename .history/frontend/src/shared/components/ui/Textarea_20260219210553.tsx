import type { FC, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Textarea: FC<TextareaProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Optional Label */}
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      )}

      {/* Textarea */}
      <textarea
        {...props}
        className={clsx(
          "w-full border rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25492D] focus:border-[#25492D] resize-none transition-colors duration-200",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
      />

      {/* Optional Error */}
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default Textarea;
