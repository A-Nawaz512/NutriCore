import type { FC, ReactNode } from "react"
import clsx from "clsx"

interface CardProps {
  children: ReactNode
  className?: string
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={clsx("bg-white shadow-md rounded-lg p-4 transition hover:shadow-lg", className)}>
      {children}
    </div>
  )
}

export default Card
