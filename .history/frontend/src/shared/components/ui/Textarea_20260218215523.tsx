import type { FC, TextareaHTMLAttributes } from "react"
import clsx from "clsx"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={clsx(
        "w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25492D] focus:border-[#25492D] resize-none transition-colors duration-200",
        className
      )}
    />
  )
}

export default Textarea
