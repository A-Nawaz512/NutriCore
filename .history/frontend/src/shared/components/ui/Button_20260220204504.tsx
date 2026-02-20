import type { FC, ReactNode, ButtonHTMLAttributes } from "react"
import clsx from "clsx"
import { motion, HTMLMotionProps } from "framer-motion"

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onDrag">,
    HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: ReactNode
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"

  const variantClasses = clsx({
    "bg-green-800 text-white hover:bg-green-700 focus:ring-green-500 cursor-pointer":
      variant === "primary",
    "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400 cursor-pointer":
      variant === "secondary",
    "border-2 border-green-800 text-green-800 hover:text-white cursor-pointer hover:bg-green-800 focus:ring-green-500":
      variant === "outline",
  })

  const sizeClasses = clsx({
    "px-3 py-1 text-sm": size === "sm",
    "px-4 py-2 text-md": size === "md",
    "px-6 py-3 text-lg": size === "lg",
  })

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      className={clsx(baseClasses, variantClasses, sizeClasses, className)}
      {...props} // safe now
    >
      {children}
    </motion.button>
  )
}

export default Button