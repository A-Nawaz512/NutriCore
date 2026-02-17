import { FC, ReactNode } from "react"
import clsx from "clsx"

interface BadgeProps {
  children: ReactNode
  color?: "blue" | "green" | "red" | "gray"
}

const Badge: FC<BadgeProps> = ({ children, color = "gray" }) => {
  const colors = clsx({
    "bg-blue-100 text-blue-800": color === "blue",
    "bg-green-100 text-green-800": color === "green",
    "bg-red-100 text-red-800": color === "red",
    "bg-gray-100 text-gray-800": color === "gray",
  })

  return <span className={clsx("px-2 py-1 text-xs rounded-full font-semibold", colors)}>{children}</span>
}

export default Badge
