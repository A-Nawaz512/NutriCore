import { FC, ReactNode } from "react"
import { Edit2, Trash2 } from "lucide-react"

interface Column {
  header: string
  accessor: string
  render?: (value: any, row: any) => ReactNode
  sortable?: boolean
}

interface TableProps {
  columns: Column[]
  data: any[]
  onEdit?: (row: any) => void
  onDelete?: (row: any) => void
}

const Table: FC<TableProps> = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto w-full bg-white shadow-sm rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#25492D] text-white">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
              >
                <div className="flex items-center gap-2">
                  {col.header}
                  {col.sortable && <span className="text-xs opacity-70">⬍</span>}
                </div>
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}
                className="px-6 py-8 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              {columns.map((col) => (
                <td key={col.accessor} className="px-6 py-4 text-sm text-gray-700">
                  {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="px-6 py-4 flex gap-3">
                  {onEdit && (
                    <button
                      onClick={() => onEdit(row)}
                      className="text-[#25492D] hover:text-[#1b3421] transition-colors"
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(row)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
