import type { FC } from "react"
import clsx from "clsx"

interface SkeletonProps {
  className?: string
}

const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return <div className={clsx("bg-gray-200 animate-pulse rounded-md", className)} />
}

export default Skeleton
