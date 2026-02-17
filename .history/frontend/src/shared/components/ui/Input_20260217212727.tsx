import { InputHTMLAttributes, FC } from "react"
import clsx from "clsx"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input: FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={clsx(
          "border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
        {...props}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  )
}

export default Input
