import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import clsx from "clsx"
import { motion } from "framer-motion"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    "font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center"

  const variantClasses = clsx({
    "bg-blue-800 text-white hover:bg-blue-700 focus:ring-blue-500": variant === "primary",
    "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400": variant === "secondary",
    "border-2 border-blue-800 text-blue-800 hover:bg-blue-800 focus:ring-blue-500": variant === "outline"
  })

  const sizeClasses = clsx({
    "px-3 py-1 text-sm": size === "sm",
    "px-4 py-2 text-md": size === "md",
    "px-6 py-3 text-lg": size === "lg"
  })

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={clsx(baseClasses, variantClasses, sizeClasses, className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
