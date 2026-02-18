import type { FC } from "react"
import clsx from "clsx"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number // number of pages to show around current
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  if (totalPages === 0) return null

  const generatePages = () => {
    const pages: (number | "...")[] = []

    const startPage = Math.max(2, currentPage - siblingCount)
    const endPage = Math.min(totalPages - 1, currentPage + siblingCount)

    // Always show first page
    pages.push(1)

    // Left ellipsis
    if (startPage > 2) {
      pages.push("...")
    }

    // Middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    // Right ellipsis
    if (endPage < totalPages - 1) {
      pages.push("...")
    }

    // Always show last page if totalPages > 1
    if (totalPages > 1) pages.push(totalPages)

    return pages
  }

  const pages = generatePages()

  return (
    <div className="flex items-center space-x-1 mt-4 justify-center">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx(
          "p-2 rounded-md border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",
        )}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Page Numbers */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(page as number)}
            className={clsx(
              "px-3 py-1 rounded-md border transition",
              page === currentPage
                ? "bg-green-800 text-white border-green-800"
                : "hover:bg-gray-100 border-gray-300 text-gray-700"
            )}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={clsx(
          "p-2 rounded-md border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

export default Pagination
