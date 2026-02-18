import { FC } from "react"
import Skeleton from "../../../shared/components/ui/"

const ProductSkeleton: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-40 w-full rounded-md" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  )
}

export default ProductSkeleton
